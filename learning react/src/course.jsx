
import picture from './assets/js.png';



//default props 
function Course({
  image = picture,       
  coursename ="Default Course",
  para = "This is a default course description."
}) {
    return(
        <div className="course">
          <img src={image} alt="Download Icon" />
          <h3>{coursename}</h3>
          <p>{para}</p>
        </div> 
    );
}


export default Course