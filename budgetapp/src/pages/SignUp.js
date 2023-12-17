export default function SignUp(){

    return <signup className={"login"}>
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
            </style>
        </head>
        <div className={"LoginContainer"}>
            <div className={"header"}>
                <div className={"text"}>Sign Up</div>
                <div className={"underline"}></div>
            </div>
            <div className={"inputs"}>

                <div className={"input"}>
                    <img src={"user_icon"} alt={""}></img>
                    <input type={"text"} placeholder={"Username"}/>
                </div>

                <div className={"input"}>
                    <img src={""} alt={""}></img>
                    <input type={"email"} placeholder={"Email"}/>
                </div>

                <div className={"input"}>
                    <img src={""} alt={""}></img>
                    <input type={"password"} placeholder={"Password"}/>
                </div>

            </div>
            <div className={"forgot-password"}>Forgot Password?</div>
            <div className={"submit-container"}>
                <div className={"submit"}>Sign Up</div>
                <div className={"submit"}>Login</div>
            </div>

        </div>
    </signup>
}