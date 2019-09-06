import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Blue from './components/blue/Blue';
import Yellow from './components/yellow/Yellow';
import Black from './components/black/Black';
import Acerca from './components/acerca/Acerca';
import Promotores from './components/promotores/Promotores';
import Especiales from './components/especiales/Especiales';
import Proyectos from './components/proyectos/Proyectos';

import Footer from './components/Footer'

const supportsHistory = 'pushState' in window.history;

ReactGA.initialize('UA-23672195-19');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  return (
    <Router forceRefresh={!supportsHistory}>
    <Menu/>
    <main className="app container">
      <Switch>       
          <Route exact path="/"  component={Home} />
          <Route path="/papel/"   component={Blue} />
          <Route path="/envases/" component={Yellow}  />
          <Route path="/otros/"  component={Black}  />
          <Route path="/residuosespeciales/"  component={Especiales}  />
          <Route path="/promotores/"  component={Promotores}  />
          <Route path="/acercade/"  component={Acerca}  />
          <Route path="/proyectos/"  component={Proyectos}  />
      </Switch>
    </main>
    <Footer/>
  </Router>
        
  );
}

export default App;
