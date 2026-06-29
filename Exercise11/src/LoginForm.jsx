import { useState } from "react";

const LoginForm = () => {

   let [login , setLogin] = useState(false)
   let [username , SetUsername] = useState("")
   let [password, setPassword] = useState("")

   const loginFuction = (event) => {

    event.preventDefault();
    if(username && password){
        setLogin(true)
    }
    
   }

   const logOutFuction = () => {
     
        setLogin(false)
        SetUsername('')
        setPassword('')
    
   }

   if (login){

    return (
        <div>
            <h1>Welcome Mr {username} , you are sucessfully 
                granted to the system !</h1>
            <button onClick={logOutFuction} >Logout</button>
        </div>
    )
   } 

   return(
    

    <form onSubmit={loginFuction} >
    
        <input 
                type="text" 
                placeholder="Please Enter Username"
                onChange={(event)=>(SetUsername(event.target.value))}
                value={username}
                required

            /><br></br>

            <input 
                type="text"
                placeholder="Passoword"
                onChange={(event)=>(setPassword(event.target.value))} 
                value={password}
                required
            /><br></br>

            <button type="submit">Login</button>
    
    

    </form>
   )
}

export default LoginForm;