import React ,{useEffect , useState}from "react";

function Count() {
  const initialCount =0 ;
  const [count,setCount]= useState(0);

  const IncrementFive= ()=>{
      for( let i=0 ;i<5;i++){
        setCount(prevCount=> prevCount + 1)
      }
  }
  const tick =()=>{
    setCount(prevCount =>prevCount + 1)
  }

  useEffect(()=>{
      const interval = setInterval(tick ,1000)
      return()=>{
        clearInterval(interval)
      }
  },[])

  return (
    <>
      <h4>Count: {count} </h4>
      <button onClick={()=> setCount(initialCount)}>Reset</button>
      <button onClick={()=> setCount(prevCount=> prevCount - 1)}>Increment</button>
      <button onClick={()=> setCount(prevCount=> prevCount + 1)}>Decrement</button>
      <button onClick={IncrementFive}>Increment 5</button>
    </>
  );
}

export default Count;
