import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {

    const user = props.user
    const setuser = props.setuser

    const navigate = useNavigate()
    const [eusername, esetEusername] = useState("")
    const [epassword, esetEpassword] = useState("")

    const handlrUInput = (event) => {
        esetEusername(event.target.value)
    }
    const handlrPInput = (event) => {
        esetEpassword(event.target.value)
    }

    const addUser = () => {
        setuser([...user, { username: eusername, password: epassword }])
        navigate("/")
    }



    return (
        <div className="bg-black p-16">
            <div className="bg-gray-200 p-12 rounded-md">
                <div>
                    <h1 className="text-2xl font-medium">Hey Hi 👋</h1>
                    <p>You can Signup here :)</p>
                </div>
                <div className="flex flex-col gap-3 my-3">
                    <input onChange={handlrUInput} type="text" placeholder="Username" className="w-52 p-1 rounded-md bg-transparent border border-black" />
                    <input onChange={handlrPInput} type="text" placeholder="Password" className="w-52 p-1 rounded-md bg-transparent border border-black" />
                    <input type="text" placeholder="Confirm password" className="w-52 p-1 rounded-md bg-transparent border border-black" />
                    <button onClick={addUser} className="bg-[#7F71DA] w-24 rounded-md p-2">signup</button>
                    <p>Already have an acoount? <Link to={"/"} className="underline">Login</Link>  </p>
                </div>


            </div>

        </div>
    )
}

export default Signup