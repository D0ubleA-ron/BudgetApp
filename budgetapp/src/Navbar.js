export default function Navbar(){
    return <nav className={"nav"}>

        <a className={"site-title"} href={"/"}>Money Moves</a>
        <ul>
            <li>
                <a href={"/login"}>{auth ? "Logout" : "Login"}</a>
            </li>
            <li>
                <a href={"/portfolio"}>Portfolio</a>
            </li>
        </ul>
    </nav>
}