import { useState } from "react"
import Form from './Form';
import Report from './Report';



export const Header = () => {
    const [tab, setTab] = useState("create-profile");


    return (<div>
        <div className="banner">
            <h2 className="banner-text">Become a Member</h2>
        </div>

        <div className="main-container">
            <h1>Create Profile</h1>
        </div>
        <div className="second_container">
            <button type="submit" className="create_profile" onClick={()=>{setTab("create-profile")}}>Create profile</button>

            <button type="submit" className="Reports" onClick={() => { setTab("report") }}>Reports</button>
        </div>

        {tab === "create-profile" ? <Form /> : <Report/>}



    </div>)
}

 

