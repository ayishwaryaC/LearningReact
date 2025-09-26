import { useState } from "react";
import Child from './childmethodasprops';


function parentmethodasprops(){
    const [message,setmessage] = useState("");


    function showmessage(child){
        setmessage(child);
    }

    return(
       <div>
        <h3>parent Component</h3>
        <p>Before the Method call:{message}</p>
        <Child senddata={showmessage}/>
       </div>
    );
}
export default parentmethodasprops;