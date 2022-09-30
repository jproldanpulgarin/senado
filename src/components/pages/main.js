import React from 'react'
import header from "../img/header.png"
import "../css/main.css"
import NavBarra from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Proyectos from '../proyects/proyect';

function Main() {
    return (
     <div className="container">

        {/* HEADER */}
        <div className='header'>
            <img src={header} alt=""  />
        </div>

        {/* BARRA DE NAVEGACION */}    
        <div>
        <NavBarra/>
        </div>
        
        {/* PROYECTOS */}
        <div>
            <Proyectos/>
        </div>

        {/* FOOTER */}

        <footer>
            <Footer/>
        </footer>
        
        
     </div>
    );
  }
  
  export default Main;