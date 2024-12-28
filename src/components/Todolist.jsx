
import Todoitems from "./Todoitems"

function Todolist(props) {
   
    const activityArr = props.activityArr
    const seractivityArr = props.setactivityArr


    return (
        <div className="px-3 py-2 flex-grow rounded-md" style={{ backgroundColor: "#BEB4EB" }}>
            <h1 className="text-2xl font-medium my-2">Today's activity</h1>
            
            {activityArr.length===0?<p>you haven't anyting yet</p>:""}
            {
                activityArr.map(function (item, index) {
                    return <Todoitems id={item.id} item={item} index={index} activityArr={activityArr} setactivityArr={seractivityArr} />
                })
            }

        </div>
    )
}

export default Todolist