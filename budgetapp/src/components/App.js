import React from 'react'
import '../App.css';
import Signup from "./Signup";
import {Container} from "react-bootstrap";
import Navbar from "./navbar";
import {AuthProvider} from "../contexts/AuthContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
      <div className="App">
          <Navbar></Navbar>
          <Container className={"d-flex align-items-center justify-content-center"} style={{minHeight: "100vh"}}>
              <div className={"w-100"} style={{maxWidth: "400px"}}>
                      <AuthProvider>
                          <Router>
                              <Route> </Route>
                          </Router>
                      </AuthProvider>
                  <Signup></Signup>
              </div>
          </Container>
      </div>
  );
}

export default App;
