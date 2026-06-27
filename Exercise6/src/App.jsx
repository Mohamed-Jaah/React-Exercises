import {useEffect, useState} from 'react'

function App(){

  let [greet, setGreet] = useState("Hello")
  let [name, setName] = useState("")

  useEffect(()=>{
    
    if(!name){
      document.title = "Welcome !";
    }
    else{
        document.title = `${greet}, ${name}`; 
    }
  },[name, greet])

  
  return(
    <div>

        <h1>Enter your name here below, to update the title</h1>
        <input
           type="text"
           value={name}
           onChange={(event)=> setName(event.target.value)}  
        />


        <input 
            type="text" 
            value={greet}
            // onChange={(event)=> setGreet("Hello")}
        />

    </div>
  )
  
}

export default App;