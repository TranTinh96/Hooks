import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar"
import DataFeching_useReducer_2 from "./components/Fetching/DataFeching_useReducer_2"


//export const CountContext = React.createContext();
//export const ChannelContext = React.createContext()




function App() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="primary">
          <Navbar.Brand href="#">React Hooks</Navbar.Brand>
      </Navbar>
      <div className="container">
        <DataFeching_useReducer_2/>
      </div>
    </div>
  );
}

export default App;
