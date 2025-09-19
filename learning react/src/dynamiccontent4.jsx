// dynamic content using loops with map
import Course from "./course"
import html from './assets/download.png'
import css3 from './assets/css3.png';
import js from './assets/js.png';
function dynamiccontent4(){
    

    const course = [
        {
            coursename : "HTML5",
            para : "HTML (HyperText Markup Language): The structure of a webpage, like the skeleton (headings, paragraphs, images).",
            image : html
        },

         {
            coursename : "css3",
            para : "CSS (Cascading Style Sheets): The style of a webpage, like colors, fonts, layouts, and design.",
            image : css3
        },

         {
            coursename : "JS",
            para : "JavaScript (JS): The brain of a webpage that makes it interactive (buttons, animations, popups).",
            image : js
        }

    ]


   const courselist = [
    course.map(
        (course) =>
         <Course name={course.coursename} para={course.para} image={course.image}/>
    )
   ]
    return(
      <>
      {courselist}
      </>
    );
}

export default dynamiccontent4
