import React ,{useState}from "react";
import Mouse from "./detail/positionMouse"

function MouseContainer() {
  const [display, setDisplay] = useState(true)

  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      { display && <Mouse />}
    </>
  );
}

export default MouseContainer;
