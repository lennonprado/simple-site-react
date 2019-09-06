import React, { Component } from 'react';

class Modal extends Component {

   // state = { show: false };


  
    onClose = e => {
        this.props.onClose && this.props.onClose(e);

        

        console.log("modal",e,this.props);

      };



    render() { 
        if(!this.props.show){
            return null;
        }
        return ( 

            <div className="my-modal">
                <div className="my-modal-body">
                    <h2>Proyecto de Extensión para Emprendedores (PEPE)</h2>
                    <p><b>Director: Ing. Marcos Lavandera <br/>
                        Director CDEI. Docente</b></p>
                    <hr/>
                    <p> Desde hace más de diez años, la Facultad de Ingeniería de Olavarría - UNICEN trabaja sistemáticamente fomentando la cultura emprendedora, realizando actividades abiertas a la comunidad y articuladas con otras organizaciones.</p>
                    <p> El Proyecto de Extensión Para Emprendedores formaliza un grupo de trabajo interinstitucional e interdisciplinario, para la capacitación y asistencia técnica de emprendedores de la economía social de muy diversos sectores.</p>
                    <p> Este proyecto es orientador y motivador de acciones metodológicas para generar un clima de emprendimiento y colaborar con emprendedores en el intercambio de saberes.</p>
                    <p> La continuidad ininterrumpida del PEPE ha facilitado la instalación y consideración del mismo dentro de la comunidad de emprendedores.</p>
                    <p> Año tras año nuevas personas y organizaciones ven en el PEPE un aliado para la concreción de nuevas ideas, dando la oportunidad de sumar nuevas líneas de acción que, además de aumentar y fortalecer la red interinstitucional, permite la incorporación de más estudiantes interesados en las líneas de trabajo para el apoyo a emprendedores.</p>
                    <p> Este año se integran, la Cooperativa de Cartoneros &quot;Viento en Contra&quot;, donde converge la formación emprendedora con cuestiones técnicas relacionas con el reciclado de papel y cartón.</p>
                    <p> Intercambio técnico con agrupación &quot;Corazones de Barro&quot; para la fabricación de termos solares, bioconstrucción y huertas orgánicas tecnificadas.</p> 
                    <p> Además, actualmente, se colabora en el armado de Ecoladrillos, para lo que se disponen botellas plásticas vacías en Complejo Universitario de Olavarría, con la indicación para el armado de los mismos.</p>
                    <hr/>
                    <div className="contacto">
                        <h3>Contacto</h3>
                        <p>Centro de Desarrollo Emprendedor e Innovación<br />
                        02284 451055 int. 287<br />
                        pepe.fio.unicen@gmail.com</p>
                    </div>

                    <a href=""  className="btn btn-success">Ir al sitio web</a>

                    <button className="btn btn-success" onClick={this.onClose()}
          >
            Close
          </button>
                </div>
            </div>
         );
    }
}
 
export default Modal;