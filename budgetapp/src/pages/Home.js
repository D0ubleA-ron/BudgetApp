import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Home(){
    const [auth, setAuth] = useState(false)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const [username, setName] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:8081')
            .then( res=> {
                if(res.data.Status === "Success"){
                    setAuth(true)
                    setName(res.data.username)
                }
                else{
                    setAuth(false)
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    },[])

    const handleDelete = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                navigate('/login');
        }).catch(err => console.log(err))
    }
    return (<home className={"home"}>
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
            </style>
        </head>
        <h1>Welcome {username} !</h1>
        <h1> {message}</h1>
        <button className={"submit"} onClick={handleDelete}></button>
    </home>)
}