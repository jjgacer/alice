import { useState } from 'react'
import Background from './assets/temp_back.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
	    <button className="button"  onClick={() => setCount((count) => count + 1)}>	
		  Create New Task	 
		</button>  
      </div>
	  </div>		  
    </>
  );
}

export default App
