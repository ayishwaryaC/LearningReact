
import React from "react";

function Child(props){
    return(
      <div>
        <h3>child component</h3>
        <button onClick={() => props.senddata("Hello from Child!")}>
        Send Data to Parent
      </button>
      </div>
    );
}
export default Child