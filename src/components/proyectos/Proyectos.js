import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Modal from './modal/Modal';

import './proyectos.css';

class Proyectos extends Component {

    state = { show: false };

    showModal = e => {

        console.log("pro",e,this);


        this.setState({
            show: !this.state.show
        });
    };

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


<div className="row" style={{minHeight: 70 + 'vh'}}>    
    <h1 className="col-12"> Proyectos vinculados</h1>


      <div>
        <p>En esta sección se describen distintos proyectos institucionales vinculados a la problemática de residuos sólidos universitarios que se implementan en las distintas sedes de la Universidad.</p>
        <p>Así por ejemplo habrá información descriptiva de los proyectos: Ecoladrillo, Recopila, Reutilización eficiente de hardware, Composteras, Bloques de telgopor, Puntos Azules, Limpiá tu huella de carbono, entre otros.</p>
    </div>




    <div className="col-12 col-sm-6 col-md-4">
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <button className="btn btn-primary" onClick={e => { this.showModal(); }} >Ver más</button>
            </div>
            <Modal onClose={this.showModal} show={this.state.show} />
                
        </div>
    </div>


</div>

         );
    }
}
 
export default Proyectos;