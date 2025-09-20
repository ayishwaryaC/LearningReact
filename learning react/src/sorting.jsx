import Course from "./course"
import html from './assets/download.png'
import css3 from './assets/css3.png';
import js from './assets/js.png';
function sorting(){
    

    const courses = [
        {
            id :1,
            coursename : "HTML5",
            para : "HTML (HyperText Markup Language)",
            image : html,
            price : 200
        },

         {
            id: 2,
            coursename : "css3",
            para : "CSS (Cascading Style Sheets)",
            image : css3,
            price : 100
        },

         {
            id : 3,
            coursename : "JS",
            para : "JavaScript (JS):(buttons, animations, popups).",
            image : js,
            price : 500
        }

    ];
    

    // sorting in ascending order
    // const sortcourse = [...courses].sort((a,b)=>
    //     a.coursename.localeCompare(b.coursename)
    // );



    // sorting in desecending order
    // const sortcourse = [...courses].sort((a,b)=>
    //   b.coursename.localeCompare(a.coursename)
    // );



    // sorting price in ascending order
    // const sortcourse = [...courses].sort((a,b)=>a.price - b.price);


    //sorting price in descending order
    const sortcourse = [...courses].sort((a,b)=>b.price - a.price)



  return(
    <>
      {sortcourse.map((courses , index) => (
        <Course 
          key={index}
          name = {courses.coursename}
          para={courses.para}
          image={courses.image}
          price={courses.price}
          />
      ))}
      </>
  )
   
    
}

export default sorting
