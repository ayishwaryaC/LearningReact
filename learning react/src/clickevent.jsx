function clickevent(props){
    


    // without using argument
    // function purchasenow(){
    //     console.log("You purchased" +" "+ props.coursename +" "+ "course succesfully");
    // }




    // with using argument
    function purchasenow(discount , e){
    console.log("You purchased" +" "+ props.coursename +" "+ "course succesfully with" +" "+discount+"%" +" "+"discount");
    console.log(e);
    }




    if(props.show == true){



    return(
       <div className="course">
          <img src={props.image} alt="Download Icon" />
          <h3>{props.coursename}</h3>
          <p>{props.para}</p>
          {/* <button onClick={purchasenow} className="button">Purchase Now</button> */}


           {/* it should display the console as page load and also the clickevent performed- it means it excuted as repeated wise */}
           {/* <button onClick={purchasenow(20)} className="button">Purchase Now</button> */}


           {/* instead of repeated muliple itmes - ignore that issue we use arrow function */}
           <button onClick={(event)=>purchasenow(20,event)} className="button">Purchase Now</button> 




        </div> 
    );
}else{
    return(
        <div className="courese">Course not avaiable</div>
    );
}
}

export default clickevent;
