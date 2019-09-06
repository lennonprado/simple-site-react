import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Proyecto extends Component {
    
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

<div className="row texto-proyecto">
    
    <h1>El Proyecto</h1>

    <div className="row presentacion">

        <div className="col-12 col-sm-6 col-md-8 text-center"><a href="http://extension.unicen.edu.ar/blog/wp-content/uploads/2019/08/presentacion.pdf" target="_blank" className="link-descarga">Presentación del proyecto (.pdf)</a> </div>
        <div className="col-12 col-sm-6 col-md-4 text-center"><a href="http://extension.unicen.edu.ar/blog/wp-content/uploads/2019/08/presentacion.pdf" target="_blank" className="btn btn-success">Descargar</a></div>

    </div>

   <p>La Universidad Nacional del Centro de la Provincia de Buenos Aires tiene 50 años de existencia con presencia en cuatro ciudades de la región centro: en Tandil, donde además se ubica su rectorado, Azul, Olavarría y Necochea. Cuenta con 10 Facultades, una subsede universitaria y varias dependencias en las que transitan diariamente alrededor de 20.000 personas entre docentes, estudiantes y no docentes.</p>

   <p>La Universidad no separa la mayoría de sus residuos sólidos urbanos, a excepción de algunos proyectos especiales de extensión que impulsan iniciativas de separación. En todas sus sedes se puede observar una gran diversidad de tachos en los que se tira indistintamente cualquier residuo. Luego se articula con el Municipio correspondiente, en cada ciudad, para la recolección y tratamiento final de los residuos.</p>

   <p>Las estimaciones indican que la Universidad genera un total diario que ronda los 800 kgrs de basura por día dentro de sus cuatro campus universitarios, más otros 100 kgrs diarios en dependencias ubicadas fuera de los campus. Tomando en cuenta que la comunidad universitaria es en sí misma un gran generador de residuos, a mediados del año 2019 la Universidad inició un proceso gradual hacia una gestión integral de sus residuos sólidos urbanos.</p>

   <p>En primer lugar se ha diseñado con amplia participación de todos los claustros y la coordinación de la Secretaría de Extensión, un sistema de separación que consta de 4 fracciones: color azul para el papel y cartón; color amarillo para los envases y color negro para el resto de los residuos, a excepción de aquellos edificios que realicen compostaje de orgánicos, en cuyo caso se separan por separado en fracción naranja.</p>

   <p>Asimismo, se creó este sitio web que pretende apoyar las acciones de información y concientización que se generen en línea a una adecuada separación y tratamiento de nuestros residuos sólidos urbanos, pero además brinda información sobre todos los residuos que se generan en la comunidad universitaria, su tratamiento y destino final, incluyendo los residuos especiales y los peligrosos.</p>

   <p>También, en colaboración con personal de la Secretaría General, se han diseñado los dispositivos para la separación, se trata de islas compuestas por un conjunto de tres recipientes de colores azul, amarillo y negro que están elevados en una estructura de hierro con su correspondiente señalética, tanto de interiores como exteriores. Además, se encuentra en desarrollo el manual de procedimiento para la gestión de residuos sólidos urbanos en todas las sedes.</p>

   <p>Los residuos separados, fracciones azul y amarilla, tendrán destino a distintas organizaciones que trabajan en su reciclado en las 4 ciudades sedes; la fracción naranja tendrá como destino el compostaje y la fracción negra será la única que irá al relleno sanitario en cada ciudad.</p>

   <p>Este trabajo debe ser acompañado de una importante campaña de concientización de largo plazo pretendiendo reunir distintas iniciativas provenientes de todos los claustros universitarios, con la intención de trabajar la problemática de nuestros residuos desde una perspectiva de transversalidad e integralidad.</p>

   <p>De este modo, la Universidad comienza un trabajo articulado tanto hacia adentro como hacia afuera, que le permitirá reducir aproximadamente en un 50% la basura que envía al relleno sanitario, a la vez que profundizar sus vínculos con cooperativas y asociaciones que trabajan en tareas de recuperación y reciclaje de muchos de los residuos separados.</p>

   <p>Se pretende entonces, a largo plazo, llegar a reducir la cantidad total de residuos generados, reciclando aquellos que se sea posible en articulación con propuestas de generación de empleo y/o inclusión social en cada una de las ciudades sedes, y reutilizar aquellos materiales que sea posible.</p>

</div>

         );
    }
}
 
export default Proyecto;