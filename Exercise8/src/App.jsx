import {useState, useEffect} from 'react'


function App(){

  let [time, setTime] = useState(0);
  let [isRunning, setIsRunning] = useState(false)

  useEffect (()=>{

    let timer;

    if(isRunning){
      // for every one second (1second = 1,000 milli-Second), subtract 1
      
      timer = setInterval(()=>{
      setTime((prev)=>(prev > 0 ? prev - 1 : 0))
    },1000)
    }
    

    // cleaning the useEffect for accurate countdown

    return()=> clearInterval(timer)

  },[isRunning]) 


  // start timer function

  const startTimer = () => {
    setIsRunning(true)
  }

    // stop timer function

  const stopTimer = () => {
    setIsRunning(false)
  }

    // reset timer function

  const resetTimer = () => {
    setIsRunning(false)
    setTime(0)
  }
  

  return(
  <>
  
  <h1>This is CountDOwn Timer !!</h1>

  <h3>Please input your required time</h3>

  <input 
  type="number"
  placeholder='Time' 
  onChange={(event)=>setTime(event.target.value)}
  />

  <p>Remaining time is : <strong>{time}</strong>  Seconds</p>
  <button disabled={time === 0 || time === '0' || isRunning} onClick={startTimer} >Start</button>
  <button disabled={!isRunning} onClick={stopTimer} >Stop</button>
  <button disabled={time === 0 || time === '0' || isRunning} onClick={resetTimer} >Reset</button>
  
  </>
  )
}

export default App;