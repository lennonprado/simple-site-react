import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import './yellow.css';
import latas from '../../imgs/icons/latas.svg';
import botellas from '../../imgs/icons/botellas.svg';


class Yellow extends Component {

    componentDidMount(){
        this.resetbody();
        this.handleYellow();
    } 
    componentDidUpdate(){
        this.resetbody();
        this.handleYellow();
    }

    handleYellow(){
        document.body.classList.add('body-yellow');
    }

    resetbody(){
        document.body.classList.remove('body-blue');
        document.body.classList.remove('body-yellow');
        document.body.classList.remove('body-black');
        document.querySelector("#mySidenav").style.width = "0";   

    }



    render() { 
        return ( 

<div className="row yellow-general">

                    <div className="col-12 iconos">
                            <img src={botellas} className="icon" alt="Botellas"/>
                            <img src={latas} className="icon" alt="Latas"/>
                    </div>
                
                    <div className="row descripcion">                    
                        <div className="col-12 col-md-6">
                            <div className="sino">
                            <h2>SI</h2>
                            <p></p>
                            <ul>
                            <li>Botellas plásticas de bebidas varias</li>

                            <li>Tetra brik</li>

                            <li>Latas</li>

                            <li>Sachets</li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="sino">
                            <h2>NO</h2>
                            <p></p>
                            <ul>                               

                            <li>Botellas de vidrio</li>

                            <li>Elementos de limpieza o higiene</li>

                            <li>Envases de pinturas o productos químicos</li>

                            <li>Material de oficina: lapiceras, clips, marcadores, ganchitos</li>

                            <li>Material electrónico</li>

                            <li>Tóneres y cartuchos</li>

                            <li>Pilas</li>
                            </ul>
                        </div>
                        </div>
                    </div>
            </div>

         );
    }
}
 
export default Yellow;