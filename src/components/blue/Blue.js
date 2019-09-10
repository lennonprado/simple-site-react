import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import './Blue.css';


import carton from '../../imgs/icons/carton.svg';
import cuadernos from '../../imgs/icons/cuadernos.svg';
import folleteria from '../../imgs/icons/folleteria.svg';
import papel from '../../imgs/icons/papel.svg';

class Blue extends Component {

    handleBlue(){
        document.body.classList.add('body-blue');
    }

    resetbody(){
        document.body.classList.remove('body-blue');
        document.body.classList.remove('body-yellow');
        document.body.classList.remove('body-black');
        document.querySelector("#mySidenav").style.width = "0";   
    }

    componentDidMount(){
        this.resetbody();
        this.handleBlue();
    } 
    componentDidUpdate(){
        this.resetbody();
        this.handleBlue();
    }

    render() { 
        return ( 

            <div className="row blue-general">

                <div className="row iconos">
                        <img src={papel} className="icon" alt="Papel"/>
                        <img src={carton} className="icon" alt="Carton"/>
                        <img src={folleteria} className="icon" alt="Folleteria"/>
                        <img src={cuadernos} className="icon" alt="Cuadernos"/>                
                    
                </div>
            

                <div className="row descripcion">                    
                    <div className="col-12 col-md-6">
                        <div className="sino">
                        <h2>SI</h2>
                        <p></p>
                        <ul>
                            <li>Papel limpio y seco: blanco, escrito, impreso, apuntes, cuadernos, blocks, agendas, afiches, biblioratos, papel madera, sobres, cuadernos, cartulinas.</li>
                            <li>Cartón: todo tipo de cajas, carpetas y cartones limpios y secos. Plegar/doblar al depositarlo.</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="sino">
                        <h2>NO</h2>
                        <ul>
                            <li>Papeles o cartones sucios y húmedos.</li>
                            <li> Papel y cartón manchado de aceite, comida y/o pintura.</li> 
                            <li>Papeles de caramelos y golosinas.</li>
                            <li> Papel higiénico.</li>
                            <li>Servilletas / pañuelos descartables usados.</li>
                            <li> Tickets.</li>
                            <li> Envases y tetra bricks.</li>
                        </ul>
                    </div>
                    </div>
                </div>
        </div>

         );
    }
}
 
export default Blue;