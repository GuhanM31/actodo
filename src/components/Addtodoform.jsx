import { useState } from "react"

function Addtodoform(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newactivity,setnewactivity] = useState ("")

    const handlechange =(event)=>{
          setnewactivity(event.target.value)
    }

    const addactivity =()=>{
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
    }

    return(
        <div >
        <h1 className="text-2xl font-medium my-2">manage activity</h1>
        <div className="flex mt-3">
          <input value={newactivity} onChange={handlechange}   className="border border-black bg-transparent px-2 py-1 rounded-l-md" placeholder="Next Activity?"></input>
          <button onClick={addactivity}  className="bg-black text-white border border-black px-1 rounded-r-md ">Add</button>
        </div>
      </div>

    )
}

export default Addtodoform