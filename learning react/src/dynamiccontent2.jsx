// dynamic content using conditional rendering 


function dynamiccontent2(props){


    if(props.show == true){

    
    return(
      <div className="course">
         <img src={props.image} alt="Download Icon" />
          <h3>{props.coursename}</h3>
          <p>{props.para}</p>
      </div>
    );
    }else{
        return(
        <h3>Content loading</h3>
        );
    }
}

export default dynamiccontent2;
