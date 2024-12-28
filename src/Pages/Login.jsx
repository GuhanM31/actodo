import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {


    const user = props.user

    const navigate = useNavigate()
    const [eusername, esetEusername] = useState("")
    const [epassword, esetEpassword] = useState("")

    const [ruser, setruser] = useState(true)

    const handlrUInput = (event) => {
        esetEusername(event.target.value)
    }
    const handlrPInput = (event) => {
        esetEpassword(event.target.value)
    }

    const checkUser = () => {
        var userfound = false
        user.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login successfull")
                userfound = true
                navigate("/Landing", { state: { user: eusername } })
            }

        })
        if (userfound === false) {
            console.log("Login failed")
            setruser(false)
        }
    }

    return (
        <div className="bg-black p-16">
            <div className="bg-gray-200 p-12 rounded-md">
                <div>
                    <h1 className="text-2xl font-medium">Hey Hi</h1>
                    {ruser ? <div><p>I help you manage your activities after you Login :)</p></div> : <p className="text-red-500">please sign up before you Login</p>}



                </div>
                <div className="flex flex-col gap-3 my-3">
                    <input onChange={handlrUInput} type="text" placeholder="Username" className="w-52 p-1 rounded-md bg-transparent border border-black px-2" />
                    <input onChange={handlrPInput} type="text" placeholder="Password" className="w-52 p-1 rounded-md bg-transparent border border-black px-2" />

                    <button className="bg-[#7F71DA] w-24 rounded-md p-2" onClick={checkUser}>Login</button>
                    <p>Don't have an account? <Link to={"/Signup"} className="underline">Signup</Link>  </p>
                </div>


            </div>

        </div>
    )
}

export default Login