function Todoitems(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const handleDelete = (deletedid) => {
        var temprr = activityArr.filter(function (item) {
            if (item.id === deletedid)
                 { return false }
            else {
                return true
            }
        })
        setactivityArr(temprr)
}

return (
    <div className="flex justify-between">
        <p>{props.index + 1}. {props.item.activity}</p>
        <button className="text-red-500" onClick={() =>handleDelete(props.id) }>Delete</button>
    </div>

)
}
export default Todoitems