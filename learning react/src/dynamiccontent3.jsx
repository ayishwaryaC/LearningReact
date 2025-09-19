// dynamic content using loop with map()

import Course from './course'
import html from './assets/download.png'
import css3 from './assets/css3.png';
import js from './assets/js.png';
import react from './assets/react.svg';


function Dynamiccontent3(){
   
    const course = [
         {coursename :"HTML5",
         para :"Welcome to HTML5 Course",
         image : html},


          {coursename :"Css3",
         para :"Welcome to CSS3 Course",
         image : css3},

          {coursename :"JS",
         para :"Welcome to JS Course",
         image : js},

         {coursename :"React",
         para :"Welcome to react Course",
         image : react}
   ]


   const courseList = course.map(
    (course) => 
    <Course name={course.coursename} image={course.image} para={course.para}/>)

return(
    <>
    {courseList}
    </>
);
}


export default Dynamiccontent3
