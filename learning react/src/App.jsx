
import './App.css'
// import Course from './course'
import html from './assets/download.png'
// import css3 from './assets/css3.png';
// import Props from './props';
// import js from './assets/js.png';
// import Destructingprops from './destructingprops';

// import Multipleprops from './multipleprops';
import Defaultprops from './defaultprops';


function App(){

  return (
    <>





     {/* Props go througth the props.jsx
     <Props  coursename="HTML5" para="Welcome to HTML5 Course" image={html}/>
     <Props  coursename="Css3"  para="Welcome to CSS3 Course"   image={css3}/>                                                     
     <Props  coursename="JS" para="Welcome to Javascript Course" image={js} /> */}



     {/* mulitipleprops - gothrougth the multipleprops.jsx*/} 
     {/* <Multipleprops  coursename="HTML5" para="Welcome to HTML5 Course" image={html}/>
     <Multipleprops  coursename="Css3"  para="Welcome to CSS3 Course"   image={css3}/>                                                     
     <Multipleprops  coursename="JS" para="Welcome to Javascript Course" image={js} /> */}



    {/* /destructingprops - go througth the destructingprops*/}
    {/* <Destructingprops  image={html}/> */}



    

    <Defaultprops coursename="HTML5" para="Welcome to HTML5 Course" image={html}/>
    <Defaultprops />                                                   
    <Defaultprops />                                                      
  
    
     
    </>
  );
}

export default App
