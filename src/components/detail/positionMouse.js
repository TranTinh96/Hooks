import React ,{useEffect , useState}from "react";

function Mouse() {
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)


  const logMousePosition = e =>{
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)


  }
  useEffect(()=>{
     console.log('useEffect called')
     window.addEventListener('mousedown',logMousePosition)
     //Unmounting code == ComponentWillUnmount()
     return()=>{
       console.log("Component Unmounting code")
       window.removeEventListener('mousedown',logMousePosition)
     }
  },[])
  return (
    <>
       <h2>X = {x} </h2>
       <h2>Y = {y}</h2>
    </>
  );
}

export default Mouse;
