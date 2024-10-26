public class Task{
	private String name;
	private int diff, priority;
	
	public Task(String name, int diff, int priority){
		this.name = name;
		this.diff = diff;
		this. priority = priority;
	}	

	public int getDiff(){
		return diff;
	}

	public int getPriority(){
		return priority;
	}	

	public String getName(){
		return name;
	}

	//not putting any setters, tasks should be immutable	
}		


