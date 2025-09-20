

import Course from "./course"
import html from './assets/download.png'
import css3 from './assets/css3.png';
import js from './assets/js.png';
function keyinreact(){
    

    const course = [
        {
            id :1,
            coursename : "HTML5",
            para : "HTML (HyperText Markup Language)",
            image : html
        },

         {
            id: 2,
            coursename : "css3",
            para : "CSS (Cascading Style Sheets)",
            image : css3
        },

         {
            id : 3,
            coursename : "JS",
            para : "JavaScript (JS):(buttons, animations, popups).",
            image : js
        }

    ];

   
    


  
    return(
      <>
      {course.map((course , index) => (
        <Course 
          key={index}
          name = {course.coursename}
          para={course.para}
          image={course.image}
          />
      ))}
      </>
    );
}

export default keyinreact
