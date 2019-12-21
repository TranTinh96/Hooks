import React ,{useEffect , useState}from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar"
import MouseContainer from "./components/mouseContainer"
import Count from "./components/detail/count"

function App() {
 
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="light">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Navbar>
      {/*<MouseContainer/>*/ }
      <Count/>
    </>
  );
}

export default App;
