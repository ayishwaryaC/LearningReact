
import './App.css'
// import Course from './course'
import html from './assets/download.png'
import css3 from './assets/css3.png';
// import Props from './props';
import js from './assets/js.png';
// import Destructingprops from './destructingprops';

// import Multipleprops from './multipleprops';
// import Defaultprops from './defaultprops';
// import Conditionrendering1 from './conditionrendering1';
// import Conditionrendering2 from './conditionrendering2';
// import PropTypes from './proptypes'
// import Dynamiccontent1 from './dynamiccontent1';
// import Dynamiccontent2 from './dynamiccontent2';
// import Dynamiccontent3 from './dynamiccontent3';\
// import Dynamiccontent4 from './dynamiccontent4';
// import Keyinreact from './key1';

// import Filtering from './filtering';
// import Sorting1 from './sorting';
// import Clickevent from './clickevent1';
// import Usestatehook from './usestatehook1';
// import Usestatehook2 from './usestatehook2';
// import Usestatehook3 from './usestatehook3';
import Methodasprops from './methodasprops';
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



    

    {/* <Defaultprops coursename="HTML5" para="Welcome to HTML5 Course" image={html}/>
    <Defaultprops />                                                   
    <Defaultprops />  */}


     {/* conditionrendering1 
     <Conditionrendering1  coursename="HTML5" para="Welcome to HTML5 Course" image={html} show={true}/>
     <Conditionrendering1  coursename="Css3"  para="Welcome to CSS3 Course"   image={css3} />                                                     
     <Conditionrendering1  coursename="JS" para="Welcome to Javascript Course" image={js} show={true}/> */}




    {/* Proptypes */}
    {/* <PropTypes  coursename="HTML5" para="Welcome to HTML5 Course" image={html} show={true}/>
     <PropTypes coursename="Css3"  para="Welcome to CSS3 Course"   image={css3} show={true}/>                                                     
     <PropTypes coursename="JS" para="Welcome to Javascript Course" image={js} show={true}/> */}




     {/* dynamic content using props */}
     {/* <Dynamiccontent1  coursename="HTML5" para="Welcome to HTML5 Course" image={html} show={true}/>
     <Dynamiccontent1 coursename="Css3"  para="Welcome to CSS3 Course"   image={css3} show={true}/>                                                     
     <Dynamiccontent1 coursename="JS" para="Welcome to Javascript Course" image={js} show={true}/> */}



     {/* dynamic content using conditional rendering */}
     {/* <Dynamiccontent2  coursename="HTML5" para="Welcome to HTML5 Course" image={html} show={true}/>
     <Dynamiccontent2 coursename="Css3"  para="Welcome to CSS3 Course"   image={css3} show={false}/>                                                     
     <Dynamiccontent2 coursename="JS" para="Welcome to Javascript Course" image={js} show={true}/> */}

     

      {/* dynamic content using lopp with .map() */}

     {/* <Dynamiccontent3/> */}

     {/* <Dynamiccontent4/> */}

     {/* <Keyinreact/> */}

      {/* <Filtering/> */}

      {/* <Sorting1/> */}




      {/* clickevent */}
      {/* < Clickevent  coursename="HTML5" para="Welcome to HTML5 Course" image={html} show={true}/>
     < Clickevent   coursename="Css3"  para="Welcome to CSS3 Course"   image={css3} show={true}/>                                                     
     < Clickevent   coursename="JS" para="Welcome to Javascript Course" image={js} show={true}/>  */}



     {/* usestate hook */}
     
     {/* < Usestatehook  coursename="HTML5" para="Welcome to HTML5 Course" image={html} show={true}/>
     < Usestatehook   coursename="Css3"  para="Welcome to CSS3 Course"   image={css3} show={true}/>                                                     
     < Usestatehook   coursename="JS" para="Welcome to Javascript Course" image={js} show={true}/> */}



      {/* <Usestatehook2  coursename="HTML5" para="Welcome to HTML5 Course" image={html} show={true}/>
     < Usestatehook2   coursename="Css3"  para="Welcome to CSS3 Course"   image={css3} show={true}/>                                                     
     < Usestatehook2   coursename="JS" para="Welcome to Javascript Course" image={js} show={true}/> */}


     {/* <Usestatehook3  coursename="HTML5" para="Welcome to HTML5 Course" price="200" image={html} show={true}/>
     < Usestatehook3   coursename="Css3"  para="Welcome to CSS3 Course"  price="300" image={css3} show={true}/>                                                     
     < Usestatehook3   coursename="JS" para="Welcome to Javascript Course"  price="500" image={js} show={true}/> */}


     <Methodasprops  coursename="HTML5" para="Welcome to HTML5 Course" price="200" image={html} show={true}/>
     <Methodasprops   coursename="Css3"  para="Welcome to CSS3 Course"  price="300" image={css3} show={true}/>                                                     
     <Methodasprops   coursename="JS" para="Welcome to Javascript Course"  price="500" image={js} show={true}/>
    </>
  );
}

export default App
