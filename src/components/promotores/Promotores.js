import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import imagePromotores from "../../imgs/ampliado.jpg";

class Promotores extends Component {

    componentDidMount(){
        this.resetbody();
    } 

    componentDidUpdate(){
        this.resetbody();
    }

    resetbody(){
        document.body.classList.remove('body-blue');
        document.body.classList.remove('body-yellow');
        document.body.classList.remove('body-black');
        document.querySelector("#mySidenav").style.width = "0";   

    }

    render() { 
        return ( 

<div className="row">    
    <h1 className="col-12"> Red de Promotores Ambientales</h1>

    <div className="col-12">
        <a className="imagePromotores" href="https://forms.gle/TUCUedx6i74MXAMG7" target="_blank">
            <img src={imagePromotores}alt="Flyer Red de promotores ambientales unicen" />
        </a>
    </div>    
    <div className="col-12 text-center"><br />
        <a href="https://forms.gle/TUCUedx6i74MXAMG7" target="_blank" className="btn btn-success">Incribirse</a>
    </div>
</div>

         );
    }
}
 
export default Promotores;