import React, { Component } from 'react';

import unicen from '../imgs/unicen.svg';

class Footer extends Component {

    render() { 
  

        return ( 
            
          <footer className="footer">
            <p>Universidad Nacional del Centro de la Provincia de Buenos Aires      </p>
            <p><img src={unicen} width="120px;" alt="Logo" />
            </p>
          </footer>

         );
    }
}
 
export default Footer;