import Header from '../components/Header';
import Card from '../components/card';
import Todocontainer from '../components/Todocontainer';

import { useLocation } from "react-router-dom"

function Landing() {
    const data = useLocation()
    return (
        <div className='bg-black p-20'>


            <div className="bg-[#EFEFEF] p-10 rounded-md">
                {/*header*/}
                <Header name={data.state.user}/>

                {/*Card*/}
                <div className="flex justify-around  gap-5 my-4 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"chennai"} />
                    <Card bgcolor={"#FC6662"} title={"December"} subtitle={"14:02:28"} />
                    <Card bgcolor={"#FCA301"} title={"Build Using"} subtitle={"React"} />
                </div>
                {/*todocontainer*/}
                <div>
                    <Todocontainer />

                </div>
            </div>
        </div>

    )

}

export default Landing