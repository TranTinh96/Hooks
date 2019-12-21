import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar"
//import MouseContainer from "./components/mouseContainer"
//import Count from "./components/detail/count"
//import DataFeching from "./components/Fetching/DataFeching"
import ComponentC from "./components/componentC"

export const UserContext = React.createContext();
function App() {
 
  return (
    <div className="container">
      <Navbar expand="lg" variant="dark" bg="light">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Navbar>
      {/*<MouseContainer/>*/ }
      <UserContext.Provider value={'Tran Tinh'}>
          <ComponentC/>
      </UserContext.Provider>
     
    </div>
  );
}

export default App;
