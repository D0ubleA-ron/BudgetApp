import '../App.css';
import Signup from "./Signup";
import {Container} from "react-bootstrap";
import Navbar from "./navbar";

function App() {
  return (
      <div className="App">
          <Navbar></Navbar>
          <Container className={"d-flex align-items-center justify-content-center"} style={{minHeight: "100vh"}}>
              <div className={"w-100"} style={{maxWidth: "400px"}}>
                  <Signup></Signup>
              </div>
          </Container>
      </div>
  );
}

export default App;
