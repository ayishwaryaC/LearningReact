import { useState } from "react";

function usestatehook3(props){
    
//    local varaible here we used 
//    let purchased = false;



   const [purchased, setPurchased] = useState(false);
   const[discount,setdiscount] = useState(props.price);

    // with using argument
    function purchasenow(discountshow){
     console.log("You purchased" +" "+ props.coursename +" "+ "course succesfully " );
     setPurchased(true);
     console.log(purchased)
    

//    function discountnow(discount){
//      console.log("You purchased" +" "+ props.coursename +" "+ "course succesfully with" +" "+discount+"%" +" "+"discount");
     setdiscount(discount - discountshow);
    //  console.log(discount)
    }



    if(props.show == true){



    return(
       <div className="course">
          <img src={props.image} alt="Download Icon" />
          <h3>{props.coursename}</h3>
          <p>{props.para}</p>
          {/* <p>{props.price}</p> */}
          <p>{discount}</p>
          {/* <button onClick={purchasenow} className="button">Purchase Now</button> */}


           {/* it should display the console as page load and also the clickevent performed- it means it excuted as repeated wise */}
           {/* <button onClick={purchasenow(20)} className="button">Purchase Now</button> */}


           {/* instead of repeated muliple itmes - ignore that issue we use arrow function */}
           <button onClick={(event)=>purchasenow(event)} className="button">Purchase Now</button>
           <br />
           <button onClick={(event)=>purchasenow(30,event)} className="button1">Apply discount</button>
           <br />
 
        <p>{purchased ? "already purchased" :"Get it now"}</p>



        </div> 
    );
}else{
    return(
        <div className="courese">Course not avaiable</div>
    );
}
}

export default usestatehook3;
