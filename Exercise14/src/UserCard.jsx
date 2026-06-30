let UserCard = () => {
  return (
    <div>

      {/* Header */}
      <div className="w-full h-20 bg-white flex items-center justify-center gap-20">

        <span className="bg-[#f5e4ff] text-[#7543a2] text-lg font-bold p-2 rounded-lg">
          Todo App
        </span>

        <span className="text-black text-lg">
          Study Timer
        </span>

      </div>

      {/* Main */}
      <div className="w-1/2 mx-auto mt-20 bg-white border border-[#900ff9] shadow-lg rounded-lg p-2">

        <h1 className="text-2xl font-bold text-black text-center">
          My Todo List
        </h1>

        <input type="text" placeholder="Add a new Todo..." className="border-gray-500 w-md mt-5 rounded-lg  border-1 text-gray-500 p-2"/>

        <button className="bg-[#7543a2] w-20 p-2 rounded-lg ml-10" >Add</button>

        <div className="ml-10 mt-5 flex gap-10 bg-[#edeef2] p-2 w-lg rounded-xl" >
            <input type="checkbox" className="" />
            <h1 className="text-black" >He There, Whatsapp</h1>

        </div>

        <div className="ml-10 mt-5 flex gap-10 bg-[#e5e5e5] p-2 w-lg rounded-xl" >
            <input type="checkbox" className="" />
            <h1 className="text-black" >Reading Quan</h1>
            <button className="text-red-700 ml-60" >Delete</button>


        </div>

        <div className="ml-10 mt-5 flex gap-10 bg-[#edeef2] p-2 w-lg rounded-xl" >
            <input type="checkbox" className="" />
            <h1 className="text-black" >Coding</h1>

        </div>

        <div className="ml-10 mt-5 flex gap-10 bg-[#edeef2] p-2 w-lg rounded-xl" >
            <input type="checkbox" className="" />
            <h1 className="text-black" >Going to the gym and exercising ABS</h1>

        </div>

        <div className="ml-10 mt-5 flex gap-10 bg-[#edeef2] p-2 w-lg rounded-xl" >
            <input type="checkbox" className="" />
            <h1 className="text-black" >Sleep</h1>

        </div>

        

      </div>

    </div>
  )
}

export default UserCard;