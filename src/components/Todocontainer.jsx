import Todolist from "./Todolist";
import Addtodoform from "../components/Addtodoform";
import { useState } from "react";

function Todocontainer() {

    const [activityArr, setactivityArr] = useState([{ id: 1, activity: "get up at 6 'o' clock" }, { id: 2, activity: "get up at 6 'o' clock" }])

    return (
        <div className="flex gap-5 flex-wrap">
            <Addtodoform activityArr={activityArr} setactivityArr={setactivityArr} />
            <Todolist activityArr={activityArr} setactivityArr={setactivityArr} />
        </div>

    )
}
export default Todocontainer