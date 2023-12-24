import Navbar from "./Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  return (
      <div className="App">
        <Navbar></Navbar>
        <div className={"Container"}>
            <Routes>
              <Route path={"/"} element={<Home></Home>}></Route>
              <Route path={"/login"} element={<Login></Login>}></Route>
              <Route path={"/signup"} element={<SignUp></SignUp>}></Route>
            </Routes>

        </div>
  </div>
  );
}

export default App;
