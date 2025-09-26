import { useState } from "react";
import Child from './childmethodasprops1'


function parent(){
   const [total , settotal] = useState(0);

    function showtotal(child){
        settotal(child + total);
    }

    return(
   <div>
    <h3>before total </h3>
    <h3> after total:{total}</h3>
    <Child sendtotal={showtotal}/>
   </div>
    );
}
export default parent