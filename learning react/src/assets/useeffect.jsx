
// use effect here run once using dependencies []

// import { useEffect } from "react";

// function Useeffect(){
//     useEffect(() => {
//         console.log("useffect using run once dependenies without the return");
//     },[]);
    
// }
// export default Useeffect;









// use effect run on every render using dependenies empty

import { useEffect, useState } from "react";

function UseEffect(){
    const [count , setcount] = useState(0);
    useEffect(()=>{
        console.log("here i am using the dependencies as run on every render")
    });

    return(
        <div>
            <h3>count</h3>
            <button onClick={()=>setcount(count + 1)}>increase</button>
        </div>
    );
}

export default UseEffect;








// useing dependenies 
// import { useEffect, useState } from "react";

// function UseEffect(){
//     const [count , setcount] = useState(0);
//     useEffect(()=>{
//         console.log("here i am using the dependencies as run on every render",count)
//     },[count]);

//     return(
//         <div>
//             <h3>count</h3>
//             <button onClick={()=>setcount(count + 1)}>increase</button>
//         </div>
//     );
// }

// export default UseEffect;