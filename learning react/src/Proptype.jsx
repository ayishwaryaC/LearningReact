
import PropTypes from 'prop-types';

function Proptypes(props)



{
    
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
        <div className="course">Course not avaiable</div>
    );
}
}
Proptypes.propTypes = {
     coursename : PropTypes.string,
     para : PropTypes.string,
     show : PropTypes.bool
};


export default Proptypes;
