function Multipleprops({image , para,coursename}){
  return(
        <div className="course">
          <img src={image} alt="Download Icon" />
          <h3>{coursename}</h3>
          <p>{para}</p>
        </div> 
    );
}


export default Multipleprops