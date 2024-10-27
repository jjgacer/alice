import { useState } from 'react'
import Background from './assets/temp_back.jpeg'
import shroom from './assets/u.png'
import toadstool from './assets/toadstool.png'
import bearFam from './assets/bearFam.png'
import blackShroom from './assets/blackShroom.png'
import bird from './assets/borb.png'
import brownShroom from './assets/brownShroom.png'
import bunny from './assets/bunny.png'
import cottage from './assets/cottage.png'
import fountain from './assets/fountain.png'
import fox from './assets/foxy.png'
import greyShroom from './assets/greyShroom.png'
import house from './assets/house.png'
import cat from './assets/KITTY.png'
import tallShroom from './assets/Shroom.png'
import whileShroom from './assets/whiteShroom.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const [diff, setDiff] = useState("easy");
  const [importance, setImportance] = useState("");

  const form = [
	["task", ""],
	["diff", ""],
	["importance", ""]
  ];

  const updateTask = async(e) => {
	e.preventDefault();
	const {task, value} = e.target;
	form[0][1] = value;
  };

  const updateDiff = async(e) => {
	e.preventDefault();
	setDiff(e.target.value);
	form[1][1] = diff;
  };

  const handleSubmit = async(e) => {
	e.preventDefault();
	console.log(form[0][1]);
	console.log(form[1][1]);
  };

  return (
    <>
	<div className="outer">
      <div>
        <img src={Background} className="logo" alt="Background" />
      </div>
	  <div className="menu">
		  <button className="menuButton"> chose realm </button>
		  <button className="menuButton"> begin session </button>
		  <button className="menuButton"> begin session </button>
		  <button className="menuButton"> begin session </button>
		  <button className="menuButton"> begin session </button>
	  </div>
	   <div className="card">
        <p>  
		  You have {count} tasks in progress
        </p>
	  <div>
	    <form>
  	      <label for="tname">Task Name</label>
		  <br></br>
  	      <input onChange={updateTask} className="inputText" type="text" id="fname" name="firstname" placeholder="Task name.."></input>
		  <br></br>	
		 <label for="Difficulty">Difficulty</label>
		  <br></br>
    	 <select onChange={updateDiff} value={diff}  className="inputText">
      	   <option value="easy">Easy</option>
           <option value="medium">Medium</option>
     	   <option value="hard">Hard</option>
   		 </select>
	  	<br></br>
		 <label for="Importance">Importance</label>
		  <br></br>
    	 <select className="inputText"  id="importance" name="importance">
      	   <option value="low">Low</option>
           <option value="medium">Medium</option>
     	   <option value="high">High</option>
   		 </select>
	  	<br></br>
	    <button className="button" onClick={handleSubmit}>	
		  Create New Task	 
		</button> 
  	    </form>
	  </div>
      </div>
	  </div>		  
    </>
  );
}

export default App
