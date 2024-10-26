from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, Task

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/')
def home():
    return jsonify(message="Welcome to Wonderland Backend"), 200

@app.route('/tasks', methods=['GET', 'POST'])
def handle_tasks():
    if request.method == 'GET':
        tasks = Task.query.all()
        return jsonify([task.to_dict() for task in tasks])
    elif request.method == 'POST':
        data = request.json
        new_task = Task(task_name=data['task_name'], difficulty=data['difficulty'])
        db.session.add(new_task)
        db.session.commit()
        return jsonify(new_task.to_dict()), 201
    
@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task_status(task_id):
    task = Task.query.get(task_id)
    if task is None:
        return jsonify({'message': 'Task not found'}), 404

    data = request.json
    # Update the completion status based on the incoming request
    task.completed = data.get('completed', task.completed)

    db.session.commit()
    return jsonify({'message': 'Task updated successfully', 'task': task.to_dict()}), 200

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = Task.query.get(task_id)
    if task is None:
        return jsonify({'message': 'Task not found'}), 404

    db.session.delete(task)
    db.session.commit()
    return jsonify({'message': 'Task deleted successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)