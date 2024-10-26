from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task_name = db.Column(db.String(100), nullable=False)
    difficulty = db.Column(db.String(10), nullable=False)  # 'easy', 'moderate', 'hard'
    completed = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "task_name": self.task_name,
            "difficulty": self.difficulty,
            "completed": self.completed
        }