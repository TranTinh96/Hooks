import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar"
//import MouseContainer from "./components/mouseContainer"
//import Count from "./components/detail/count"
import DataFeching from "./components/Fetching/DataFeching"

function App() {
 
  return (
    <div className="container">
      <Navbar expand="lg" variant="dark" bg="light">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Navbar>
      {/*<MouseContainer/>*/ }
      <DataFeching/>
    </div>
  );
}

export default App;
