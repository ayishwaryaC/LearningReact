function Props(props) {
    return(
        <div className="course">
          <img src={props.image} alt="Download Icon" />
          <h3>{props.coursename}</h3>
          <p>{props.para}</p>
        </div> 
    );
}


export default Props