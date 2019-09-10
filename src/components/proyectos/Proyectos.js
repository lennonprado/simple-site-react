import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Modal from './modal/Modal';

import './proyectos.css';

var allprojects = require('./proyectos.json'); 

class Proyectos extends Component {

    state = {
        show: false,
        poronga:false,
        proyectos:[],
        selected: undefined
      };

      showModal = p => {

        if(this.state.show == true){
            this.setState({show: false, selected: p  });
        }
        else {
            this.setState({show: true, selected: undefined  });
        }
      };
    

    componentDidMount(){     
        this.setState({ proyectos: allprojects });
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



{this.state.proyectos.map((p,index) => {      
    return (
    <div key={index} className="col-12 col-sm-6 col-md-4">
        <div className="card">
            <img src={ p.imagen } className="card-img-top" alt={ p.titulo } />
            <div className="card-body">
                <h5 className="card-title">{ p.titulo }</h5>
                <p className="card-text">{ p.descripcion.substr(0, 100) }[...]</p>
                <button className="btn btn-primary" onClick={() => { this.showModal(p); }} > Ver más </button>
            </div>
        </div>
    </div>
    ) 
})}
    <Modal  show={this.state.show}  onClose={this.showModal} project={this.state.selected}></Modal>

</div>

         );
    }
}
 
export default Proyectos;