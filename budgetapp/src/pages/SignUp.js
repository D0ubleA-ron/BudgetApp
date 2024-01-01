import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from 'axios';
export default function SignUp(){
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault()
        axios.post('http://localhost:8081/signup', values)
            .then(res => {
                if(res.data.Status === "Success") {
                    navigate('/login')
                }else{
                    alert(res.data.Error)
                }
            })
            .then(err => console.log(err));
    }

    return <signup className={"login"}>
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
            </style>
        </head>
        <form action={""} onSubmit={handleSubmit}>
            <div className={"LoginContainer"}>
                <div className={"header"}>
                    <div className={"text"}>Sign Up</div>
                    <div className={"underline"}></div>
                </div>

                <div className={"inputs"}>
                    <div className={"input"}>
                        <img src={"user_icon"} alt={""}></img>
                        <input name={"username"} type={"text"} placeholder={"Username"} onChange={handleInput}/>
                    </div>

                    <div className={"input"}>
                        <img src={""} alt={""}></img>
                        <input name={"email"} type={"email"} placeholder={"Email"} onChange={handleInput}/>
                    </div>

                    <div className={"input"}>
                        <img src={""} alt={""}></img>
                        <input name={"password"} type={"password"} placeholder={"Password"} onChange={handleInput}/>
                    </div>

                </div>
                <div className={"forgot-password"}>Forgot Password?</div>
                <div className={"submit-container"}>
                    <button className={"submit"} type={"submit"}>Sign Up</button>
                    <Link to="/login"><button className={"submit"}>Login</button></Link>
                </div>
            </div>
        </form>
    </signup>
}