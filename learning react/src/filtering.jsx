import Course from "./course"
import html from './assets/download.png'
import css3 from './assets/css3.png';
import js from './assets/js.png';
function filtering(){
    

    const courses = [
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

   
    //  course name start with J
    //  const filter = courses.filter(course => course.coursename.startsWith("J"));


    // course para start with C
    // const filter = courses.filter(course => course.para.startsWith('C'));

    // filter by length of coursename
    // const filter = courses.filter( course => course.coursename.length < 3)
    // const filter = courses.filter( course => course.coursename.length >= 4)


    

    // Filter using multiple condition
    // const filter = courses.filter( course => course.coursename.startsWith("H") || course.coursename.startsWith("S"));
    // const filter = courses.filter( course => course.coursename.startsWith("C") || course.coursename.startsWith("J"));


    // filter using include
    // const filter = courses.filter( course => course.para.includes("buttons"));
    // const filter = courses.filter( course => course.para.includes("HyperText"));
    const filter = courses.filter( course => course.coursename.endsWith("3"));

    
  
    return(
      <>
      {filter.map((courses , index) => (
        <Course 
          key={index}
          name = {courses.coursename}
          para={courses.para}
          image={courses.image}
          />
      ))}
      </>
    );
}

export default filtering
