import React, { useReducer } from 'react'

const initialState  = {
   firstCounter :0,
   secondCounter :10
}

// State : trang thai ban dau
// action : {type ,value}
const reducer =(state , action) => {
   switch (action.type) {
   case 'increment':
      return  {...state, firstCounter : state.firstCounter + action.value}
   case "decrement":
      return {...state , firstCounter : state.firstCounter - action.value}
   case 'increment5':
      return  {...state , secondCounter : state.secondCounter + action.value}
   case "decrement5":
      return  {...state , secondCounter : state.secondCounter - action.value}
   case 'reset':
      return initialState
   default:
      return state
   }
}


 function CountTwo() {
   const [count , dispatch] = useReducer(reducer,initialState)
      return (
         <div>
            <h3> Count : {count.firstCounter}</h3>
            <h3> Count 5 : {count.secondCounter}</h3>
            <button onClick={()=>dispatch({type :'increment' , value : 1})} >Increment</button>
            <button onClick={()=>dispatch({type :'decrement' , value : 1})}>Decrement</button>
            <br/>
            <button onClick={()=>dispatch({type :'increment5' , value : 5})} >Increment 5</button>
            <button onClick={()=>dispatch({type :'decrement5' , value : 5})}>Decrement 5</button>
            <button onClick={()=>dispatch({type : 'reset'})}>Reset</button>
         </div>
      )
}

export default CountTwo