import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from "react-router-dom";

import './Menu.css';

import sustentable from '../../imgs/sustentable.svg';
import blackTrash from '../../imgs/black.svg';
import blueTrash from '../../imgs/blue.svg';
import yellowTrash from '../../imgs/yellow.svg';

class menu extends Component {

    componentDidMount(){
      this.closeNav();
    }
    
    componentDidUpdate(){
      this.closeNav();
    } 

    openNav() {
      document.querySelector("#mySidenav").style.width = "350px";
    }
    
    closeNav() {
      document.querySelector("#mySidenav").style.width = "0";   
    }

    render() { 
  

        return ( 
            <div className="row nav-residuos">
              <div className="col-6 text-left"><Link to="/"><img src={sustentable} className="logo-sup-sustentable" alt="Logo" /></Link></div>
              <div className="col-6 text-right">
                <div id="mySidenav" className="sidenav">
                <button className="closebtn" onClick={this.closeNav}>&times;</button>
                <h2>MENÚ</h2>
                <ul>
                  <li className="tachos-botones">
                    <Link to="/papel/">
                        <img src={blueTrash} alt="Tacho Azul"/>
                    </Link> 
                    <Link to="/envases/">
                        <img src={yellowTrash} alt="Tacho Amarillo"/>
                    </Link>
                    <Link to="/otros/">
                        <img src={blackTrash} alt="Tacho Negro"/>
                    </Link>
                  </li>
                  <li className="">                  
                  <NavLink activeClassName="active" to="/">Inicio</NavLink>
                  </li>
                  <li className="">
                  <NavLink activeClassName="active" to="/residuosespeciales/">Residuos especiales</NavLink>                   
                  </li>
                  <li className="">
                  <NavLink activeClassName="active" to="/promotores/">Red de promotores</NavLink>
                  </li>
                  <li className="">
                  <NavLink activeClassName="active" to="/proyectos/">Proyectos vinculados</NavLink>
                  </li>
                  <li>
                  <NavLink activeClassName="active" to="/acercade/">Acerca del proyecto</NavLink>                   
                  </li>
                </ul>

                

                </div>

                <button onClick={this.openNav} id="menuToggle">
                 
                  <span></span>
                  <span></span>
                  <span></span>
                </button>



              </div>


            
     
          </div>
         );
    }
}
 
export default menu;