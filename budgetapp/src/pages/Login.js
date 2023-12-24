import {Link} from "react-router-dom";
import {useState} from "react";

export default function Login(){

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState([])
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault()
    }

    return <login className={"login"}>
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
            </style>
        </head>
        <form action={""} onSubmit={handleSubmit}>
        <div className={"LoginContainer"}>
            <div className={"header"}>
                <div className={"text"}>Login</div>
                <div className={"underline"}></div>
            </div>

            <div className={"inputs"}>
                <div className={"input"}>
                    <img src={"user_icon"} alt={""}></img>
                    <input type={"text"} placeholder={"Email"} name={"email"}/>
                </div>

                <div className={"input"}>
                    <img src={""} alt={""}></img>
                    <input type={"password"} placeholder={"Password"} name={"password"}/>
                </div>

            </div>
            <div className={"forgot-password"}>Forgot Password?</div>
            <div className={"submit-container"}>
                <Link to="/signup"><button className={"submit"}>Sign Up</button></Link>
                <button className={"submit"}>Login</button>
            </div>


        </div>
        </form>
    </login>
}