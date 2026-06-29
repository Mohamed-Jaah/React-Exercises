import { use } from 'react'
import {useState, useEffect} from 'react'

// gitHub API link is here below :
//  https://api.github.com/users


function App(){
  
  // Declaring States

  let [searchState, setSeachState ] = useState('')
  let [userInfo, setUserInfo] = useState(null)
  let [loading, setLoading] = useState (false)
  let [error , setError] = useState ('')
 
  useEffect(()=>{

    // error
    if(error){
      console.error("Importing Data Error", error);
    }
    },[error])

    const searchUser = async ()=>{

      if(!searchState.trim()) return;

      try{
        setLoading(true)
        setError("")

        let response = await fetch(`https://api.github.com/users/${searchState}`);

        if(!response.ok){
          throw new Error("User not found");
        }

        let data = await response.json();
        setUserInfo(data);

      }catch(error){
        setError(error.message);
        setUserInfo(null);
      }finally {
      setLoading(false);
    }

    }


  
 
  return(
    
    <>
    
      <h1>Here below , you can search your gitHub Profile Information :- </h1>

      <input 
        type="text" 
        placeholder='Type Your Username'
        value={searchState}
        onChange={(event)=>setSeachState(event.target.value)}
      />

      <button onClick={searchUser} >Search</button>


      {/* Loading */}

      {loading && <p>Loading...</p>}


      {/* ERROR */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* USER INFO */}
      {userInfo && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={userInfo.avatar_url}
            width="100"
            style={{ borderRadius: "50%" }}
          />

          <h2>{userInfo.name || userInfo.login}</h2>
          <p>{userInfo.bio}</p>
          <p>Followers: {userInfo.followers}</p>
          <p>Public Repos: {userInfo.public_repos}</p>
        </div>
      )}

    
    </>
  
  )
}

export default App;