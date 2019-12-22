import React ,{useReducer ,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar"
import ComponentA from "./components/useReducer_useContext/componentA"
import ComponentB from "./components/useReducer_useContext/componentB"
import ComponentC from "./components/useReducer_useContext/componentC"

export const CountContext = React.createContext();
//export const ChannelContext = React.createContext()


const initialState  = 0
const reducer =(state , action) => {
   switch (action) {

   case 'increment':
      return  state + 1
   case "decrement":
      return state - 1
   case 'reset':
      return initialState
   default:
      return state
   }
}


function App() {
  const [count , dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="primary">
          <Navbar.Brand href="#">React Hooks</Navbar.Brand>
      </Navbar>
      <div className="container">
        <CountContext.Provider  value={{countState : count , countDispatch : dispatch}}>
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
        </CountContext.Provider>
      </div>
    </div>
  );
}

export default App;
