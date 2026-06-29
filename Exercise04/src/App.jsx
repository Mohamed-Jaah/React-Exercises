import {useState} from 'react'

function App(){

  const [isVisible, setIsVisible] = useState(true)

  const turnFuction = () =>{
    setIsVisible(!isVisible)
  }
  
  return(
    <>

      <h1>The Button Is {isVisible ? 'OFF' : 'ON'}</h1>
      <button onClick={turnFuction}>Turn {isVisible ? 'ON' : 'OFF'}</button>
    
    </>
  )

}

export default App;