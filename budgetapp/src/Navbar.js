export default function Navbar(){
    return <nav className={"nav"}>
        <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
                </style>
        </head>
        <a className={"site-title"} href={"/"}>Money Moves</a>
        <ul>
            <li>
                <a href={"/login"}>Login</a>
            </li>
            <li>
                <a href={"/portfolio"}>Portfolio</a>
            </li>
        </ul>
    </nav>
}