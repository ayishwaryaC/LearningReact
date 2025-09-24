import { useState } from "react";

function usestatehook2(props){



    const [purchased , setPurchased] = useState(false);
    const[discount,setdiscount] = useState(false);


        // with using argument
    function purchasenow(discount){
     console.log("You purchased" +" "+ props.coursename +" "+ "course succesfully with" +" "+discount+"%" +" "+"discount");
     setPurchased(true);
     console.log(purchased)
    }




    if(props.show == true){



    return(
       <div className="course">
          <img src={props.image} alt="Download Icon" />
          <h3>{props.coursename}</h3>
          <p>{props.para}</p>
          <p>{props.price}</p>
          {/* <button onClick={purchasenow} className="button">Purchase Now</button> */}


           {/* it should display the console as page load and also the clickevent performed- it means it excuted as repeated wise */}
           {/* <button onClick={purchasenow(20)} className="button">Purchase Now</button> */}


           {/* instead of repeated muliple itmes - ignore that issue we use arrow function */}
           <button onClick={(event)=>purchasenow(20,event)} className="button">Purchase Now</button>
           <br />
 
        <p>{purchased ? "you got discount 50%" :"Get it now"}</p>



        </div> 
    );
}else{
    return(
        <div className="courese">Course not avaiable</div>
    );
}
}

export default usestatehook2;
