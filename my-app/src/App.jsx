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
