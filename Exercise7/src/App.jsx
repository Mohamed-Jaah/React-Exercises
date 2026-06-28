

import {useEffect, useState} from 'react'

function App(){

  let [mouseX, setMouseX] = useState(0);
  let [mouseY, setMouseY] = useState(0);

  useEffect(()=>{
    console.log("Mounting .....")
    let moveYourMouse = (event)=>{
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    }
    window.addEventListener("mousemove", moveYourMouse)

    // Clean Up
    return()=>{
      console.log("Cleaning up...")
      window.removeEventListener("mousemove", moveYourMouse)
    }

  },[mouseX, mouseY])

  

  return(
    <div>

     <h1>This will tracer your mouse, please move your mouse ove the screen !</h1>

     <h4>Horizontal Mouse Value (X) : {mouseX} </h4>
     <h4>Vertical Mouse Value (Y) : {mouseY} </h4>
        

    </div>
  )
  
}

export default App;