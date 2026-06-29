const UserList =()=> {

    // declaring the array
    const users = [
        {id: 1, name:"Ahmed-Developer", email:"Ahmed@gmail.com"},
        {id: 2, name:"Mohamed-DevOps", email:"Mohamed@gmail.com"},
        {id: 3, name:"Faarah-Data-Scientist", email:"Faarah@gmail.com"}
    ]

     return(
    <>

      <ul>
        {
          users.map((user)=>(
            <li  key={user.id}>{user.name}</li>
          ))
        }
      </ul>


    </>

   
  )


}


export default UserList;