import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


import './Black.css';


import comida from '../../imgs/icons/comida.svg';
import papelsucio from '../../imgs/icons/papelsucio.svg';
import envoltorios from '../../imgs/icons/envolorios.svg';
import desechables from '../../imgs/icons/desechables.svg';

import te from '../../imgs/icons/te.svg';
import yerba1 from '../../imgs/icons/yerba1.svg';
import yerba2 from '../../imgs/icons/yerba2.svg';
import cascaras from '../../imgs/icons/cascaras.svg';


class Black extends Component {


    handleBlack(){
        document.body.classList.add('body-black');
    }

    resetbody(){
        document.body.classList.remove('body-blue');
        document.body.classList.remove('body-yellow');
        document.body.classList.remove('body-black');
        document.querySelector("#mySidenav").style.width = "0";   

    }

    componentDidMount(){
        this.resetbody();
        this.handleBlack();
    } 
    componentDidUpdate(){
        this.resetbody();
        this.handleBlack();
    }

    render() { 
        return ( 
            <div>
                <div className="row black-general">

                        <div className="col-12 iconos">
                                <img src={comida} className="icon" alt="comida"/>
                                <img src={papelsucio} className="icon" alt="papel sucio"/>
                                <img src={envoltorios} className="icon" alt="envoltorios"/>
                                <img src={desechables} className="icon" alt="Desechables"/>
                                <img src={yerba2} className="icon" alt="Yerba"/>                
                        </div>
                    
                        <div className="col-12">
                        <div className="row descripcion">                    
                        <div className="col-12 col-md-6">
                        <div className="sino">
                        <h2>SI</h2>
                                <p></p>
                                <ul>
                                    <li>Restos de comida</li>
                                    <li>Papel sucio: pañuelos usados, cajas con restos de comida</li>
                                    <li>Envoltorios: papel de golosinas, papel de galletas, papel film, paquetes de cigarrillos</li>
                                    <li>Bandejas de plástico, papel film, vasos de plástico, pañales</li>
                                    <li className="orange">Yerba (existen recipientes de color naranja en aquellos edificios que poseen composteras)

</li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="sino">
                                <h2>NO</h2>
                                <p></p>
                                <ul>                               
                                    <li>Papeles y cartones. Envases</li>
                                    <li>Tóneres y cartuchos</li>
                                    <li>Focos de bajo consumo y tubos fluorescentes</li>
                                    <li>Pilas</li>
                                    <li>Material eléctrico y electrónico</li>
                                    <li>Residuos patogénicos</li>
                                    <li>Restos de productos químicos</li>
                                    <li>Restos de pinturas</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>


                <div className="row orange-general">

                        <h1 className="col-12">Orgánicos</h1>
                        <div className="iconos">
                                <img src={te} className="icon" alt="saquitos de te y cafe"/>
                                <img src={yerba1} className="icon" alt="yerba"/>
                                <img src={cascaras} className="icon" alt="cascaras"/>
                        </div>
                        <div className="col-12">

                        <div className="row descripcion">                    
                            <div className="col-12 col-md-6">
                                <div className="sino">
                                <h2>SI</h2>
                                <p></p>
                                <ul>
                                    <li>Yerba mate seca o húmeda</li>

                                    <li>Cáscaras de fruta o verdura</li>

                                    <li>Saquitos de té o café</li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="sino">
                                <h2>NO</h2>
                                <p></p>
                                <ul>                               
                                    <li>Restos de carnes</li>

                                    <li>Restos de comidas condimentada</li>

                                    <li>Restos de lácteos o panificados</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                </div>

                </div>


            </div>
         );
    }
}
 
export default Black;