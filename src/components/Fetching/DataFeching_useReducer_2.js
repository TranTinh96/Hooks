
import React ,{useReducer ,useEffect,useState} from 'react'
import axios from "axios";

 const initialState = {
   loading : true,
   error : " ",
   post : []
}

const reducer = (state, action) => {
   switch (action.type) {
   case "FETCH_SUCCES":
      return {  
         loading : false,
         error : " ",
         post : action.payload
    }
    case "FETCH_ERROR":
      return {  
         loading : true,
         error : " Someting went wrong !",
         post : [ ]
    }

   default:
      return state
   }
}


function DataFeching_useReducer_2() {
   const [id, setID] = useState(1);
   const [state, dispatch] = useReducer(reducer, initialState)
   useEffect(() => {
      axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
         dispatch({type : "FETCH_SUCCES" , payload : res.data})
      })
      .catch(err => {
         dispatch({type : "FETCH_ERROR" })
      });
       return () => {};
      }, [id]);
      
   return (
      <div>
         <input type="text" value={id} onChange={e => setID(e.target.value)} />
         <div>
         {state.loading ? "Loading"  :  state.post.title}
         {state.error ? state.error : null}
         </div>
    </div>
   )
}

export default DataFeching_useReducer_2

