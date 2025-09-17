

import imagedefault from './assets/comingsoon.png';

function Defaultprops({
  image = imagedefault,
  coursename = "Coming Soon",
  para = "Coming soon"
}) 


{
    return(
        <div className="course">
          <img src={image} alt="Download Icon" />
          <h3>{coursename}</h3>
          <p>{para}</p>
        </div> 
    );

}




export default Defaultprops