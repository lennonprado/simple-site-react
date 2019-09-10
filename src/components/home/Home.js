import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

import blackTrash from '../../imgs/black.svg';
import blueTrash from '../../imgs/blue.svg';
import yellowTrash from '../../imgs/yellow.svg';

import './Home.css';

class Home  extends Component {
    
    constructor(){
        super();
        this.state = {
            isHovered: false
        };
       
    }
    
    componentDidMount(){
        this.resetbody();
    }

    componentDidUpdate(){
        this.resetbody();
    }
    
    handleBlue(){
        document.body.classList.add('body-blue');
    }

    handleYellow(){
        document.body.classList.add('body-yellow');
    }

    handleBlack(){
        document.body.classList.add('body-black');
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
                
                <div className="col-12 col-md-12">
                    <h1>¿CÓMO SEPARAR?</h1>                   
                </div>

                <div className="col-12 col-md-4">
                   <div className="tarro-azul" touchstart={this.handleBlue}  onMouseEnter={this.handleBlue} onMouseLeave={this.resetbody}>                       
                    <Link to="/papel/">
                        <img src={blueTrash} alt="Tacho Azul"/>
                    </Link>    
                   </div>                   
                </div>

                <div className="col-12 col-md-4">
                    <div className="tarro-amarillo"  touchstart={this.handleYellow} onMouseEnter={this.handleYellow} onMouseLeave={this.resetbody}>
                        <Link to="/envases/">
                            <img src={yellowTrash} alt="Tacho Amarillo"/>
                        </Link>
                    </div>               
                </div>

                <div className="col-12 col-md-4">   
                    <div className="tarro-negro" touchstart={this.handleBlack} onMouseEnter={this.handleBlack} onMouseLeave={this.resetbody}>
                        <Link to="/otros/">
                            <img src={blackTrash} alt="Tacho Negro"/>
                        </Link>
                    </div>
                </div>

            </div>

         );
    }
}


export default Home;