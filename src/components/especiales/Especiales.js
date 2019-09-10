import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './especiales.css';


class Otros extends Component {
    
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

<div className="row otros-residuos">

    <div className="bloque-lectura">
        <h2>¿QUÉ HACER CON LOS RAEES (RESIDUOS DE APARATOS ELÉCTRICOS Y ELECTRÓNICOS)?</h2>
        <p>Algunos ejemplos son: grandes electrodomésticos (heladeras, lavarropas), pequeños electrodomésticos (aspiradoras, planchas), aparatos de telecomunicación y consumo (computadoras, teléfonos, televisores, cámaras), entre otros.</p>
        <p>UNICEN dispone de un programa, llamado REHTO, para la reutilización eficiente de su propio hardware tecnológicamente obsoleto, creado a partir de una iniciativa de la Facultad de Ciencias Exactas; podes conocer más en: http://rehto.unicen.edu.ar Asimismo, existe otro programa en formación alojado en sede Olavarría, en la Facultad de Ingeniería (Secretaría de Extensión).</p>
        <p><i>Consejos:</i></p>
        <p>Reducir en lo posible su uso; tener sólo los necesarios.</p>
        <p>Reutilizarlos: si todavía funcionan se pueden regalar a un amigo o familiar, donarlos a proyectos o escuelas para su aprovechamiento.</p>
        <p>Reciclarlos: si el aparato no funciona y se compra uno nuevo ¿qué hago con el viejo? En la provincia de Buenos Aires la ley Nro 14321 establece ciertas responsabilidades tanto para quienes producen como quienes comercializan estos aparatos, entre ellas están obligados a darte información sobre dónde y cómo se puede reutilizar o reciclar el producto.</p>
    </div>


    <div className="bloque-lectura">
        <h2>¿QUÉ HACER CON LOS TÓNERES Y CARTUCHOS?</h2>
        <p>Los cartuchos y tóneres contienen materiales de lenta descomposición y pueden contener componentes peligrosos, como metales pesados por lo que se clasifican como residuos peligrosos.</p> 
        <p>Se reutilizan las partes servibles después de su desmontado y limpieza para la fabricación de nuevos cartuchos para las impresoras. Cuando no se pueden recuperar las piezas los cartuchos o tóneres se reciclan: las partes de plástico y metal se separan, y se entregan a empresas recicladoras.</p>
        <p>Los tóneres y cartuchos que se utilizan en la UNICEN se juntan en unos recipientes que están ubicados uno por edificio administrativo. Cuando la caja se encuentra completa, se debe avisar a la Oficina de Seguridad e Higiene de Rectorado, quienes realizan el pedido de retiro, tratamiento y disposición final a una empresa contratada, especializada en estos residuos.</p>
    </div>

    <div className="bloque-lectura">
        <h2>¿QUÉ SE PUEDE HACER CON LOS TUBOS FLUORESCENTES?</h2>
        <p>Los tubos fluorescentes no pueden depositarse con los demás residuos, tanto los tradicionales como los de bajo consumo llevan mercurio, un metal pesado muy contaminante, por eso, es importante evitar su rotura.</p>
        <p>Los tubos fluorescentes y luces de bajo consumo que se utilizan en la UNICEN se juntan en unos recipientes que están ubicados uno por edificio administrativo (se trata de la misma caja donde se dejan los tóneres y cartuchos). Cuando la caja se encuentra completa, se debe avisar a la Oficina de Seguridad e Higiene de Rectorado, quienes realizan el pedido de retiro, tratamiento y disposición final a una empresa contratada, especializada en estos residuos.</p>
        <p>Consejos:</p>
        <p>Aprovechar al máximo su vida útil. Tanto estos tubos como las luces de bajo consumo se deben utilizar en lugares donde la luz permanezca prendida por más tiempo. Cuando se sustituyen se recomienda que se guarden en la funda o caja de cartón del tubo o foco nuevo para transportarlos al punto limpio de recolección. </p>
        <p>Si se te rompe un foco de bajo consumo o tubo ventilá el cuarto durante, al menos, 15 minutos.</p>
        <p>En lo posible, usar barbijo y guantes para retirar los restos de foco o limpiarlos con un trapo húmedo, evitando el contacto con la piel. No lo limpies con aspiradora.</p>
        <p>Colocar los restos en una bolsa y, luego, colocar todo en una caja en la que se indique con marcador que los desechos contienen mercurio.</p>
    </div>


    <div className="bloque-lectura">
        <h2>¿QUÉ HACER CON LAS PILAS?</h2>
        <p>Todos los tipos de pilas y baterías deben ser tratados y reciclados con la mejor tecnología disponible, y separados de los residuos domiciliarios comunes.</p> 
        <p>En Argentina, los métodos más difundidos son la disposición en rellenos de seguridad y las técnicas de inmovilización de pilas: vitrificación, cementación y ceramización. Con esto lo que se hace es aislar el elemento, pero el compuesto sigue estando, por lo que se convierte en un pasivo ambiental. </p>
        <p>La mayoría de los Municipios disponen un programa municipal para el tratamiento de las pilas y su disposición final. Te aconsejamos guardarlas y llevarlas hasta algún punto de recolección.</p>
        <p>Las pilas y baterías utilizadas en la UNICEN se juntan en unos recipientes especiales, que están ubicados uno por edificio administrativo. Cuando el recipiente se encuentra completo, se debe avisar a la Oficina de Seguridad e Higiene de Rectorado, quienes realizan el pedido de retiro, tratamiento y disposición final a una empresa contratada, especializada en estos residuos.</p>
        <p>En la Facultad de Ingeniería de UNICEN están desarrollando un proyecto de investigación y extensión desarrollando una tecnología sustentable para el tratamiento y reciclado de pilas y baterías agotadas, analizando opciones de reutilización de sus metales y materiales componentes.</p>
        <p>Consejos:</p>
        <p>Evitemos comprar objetos que funcionen a pila o batería. </p> 
        <p>Si compramos, que sean pilas de buena calidad o pilas que tengan la leyenda: LIBRE DE MERCURIO.</p>
        <p>Utilicemos pilas recargables.</p>
        <p>Retiremos las pilas de los artefactos si no los vamos a utilizar.</p>
        <p>No tiremos las pilas en la basura de nuestra casa.</p>
        <p>No abramos las pilas, contienen metales y ácidos que contaminan el ambiente.</p>
        <p>No arrojemos las pilas y baterías al fuego, porque desprenden gases tóxicos.</p>
        <p>No tiremos pilas a cursos de agua.</p>
        <p>No mezclemos pilas y baterías nuevas con viejas.</p>
    </div>


    <div className="bloque-lectura">
        <h2>¿QUÉ HACEMOS CON LOS RESIDUOS PATOGÉNICOS?</h2>
        <p>Son desechos especiales que provienen principalmente de la actividad biológica y pueden afectar a las personas y causar contaminación del suelo, del agua o la atmósfera.</p>
        <p>Algunos ejemplos son los residuos provenientes de los laboratorios; quirófano, sangre, restos de animales producto de la investigación médica, algodones, gasas, jeringas, entre otros.</p>
        <p>La legislación prevé su tratamiento. En la UNICEN existe un procedimiento a respetar por parte de los generadores, estableciéndose en cada edificio que deben colocarlos en recipientes adecuados y diferenciados, etiquetarlos e informar a la Oficina de Seguridad e Higiene de Rectorado, quienes realizan el pedido de retiro, tratamiento y disposición final a una empresa contratada, especializada en estos residuos.</p>
        <p>Si desea leer el procedimiento completo, puede descargar el Manual de Seguridad y Salud Ocupacional&nbsp;de la UNICEN <a href="https://www.unicen.edu.ar/sites/default/files/Manual%20de%20Seguridad%20y%20Salud%20Ocupacional%20-%20UNICEN_0.pdf">en este link</a> (ver capítulo 7: Disposición Final de Residuos Especiales)</p>
        <p>Consejos:</p>
        <p>En casa, generalmente, se generan en menor cantidad, pero existen medicamentos vencidos, como alguna que otra gasa, curita o jeringa. Podés juntarlos en una bolsa o caja y llevarlos al centro de salud más cercano para que sean recolectados con los demás residuos de este tipo.</p>
    </div>


    <div className="bloque-lectura">
        <h2>¿QUÉ HACEMOS CON OTROS RESIDUOS ESPECIALES PELIGROSOS?</h2>
        <p>En ciertos laboratorios de investigaciones se producen desechos químicos tóxicos que pueden afectar a las personas y causar contaminación del suelo, del agua o la atmósfera. </p>
        <p>La legislación prevé su tratamiento. En la UNICEN existe un procedimiento a respetar por parte de los generadores, estableciéndose en cada edificio que deben colocarlos en recipientes adecuados y diferenciados, etiquetarlos e informar a la Oficina de Seguridad e Higiene de Rectorado, quienes realizan el pedido de retiro, tratamiento y disposición final a una empresa contratada, especializada en estos residuos.</p>
        <p>Si desea leer el procedimiento completo, puede descargar el Manual de Seguridad y Salud Ocupacional&nbsp;de la UNICEN <a href="https://www.unicen.edu.ar/sites/default/files/Manual%20de%20Seguridad%20y%20Salud%20Ocupacional%20-%20UNICEN_0.pdf">en este link</a> (ver capítulo 7: Disposición Final de Residuos Especiales)</p>
    </div>


    <div className="bloque-lectura">
        <h2>¿QUE HACER CON EL TELGOPOR DE LOS EMBALAJES?</h2>
        <p> El Telgopor es poliestireno expandido, que es un plástico derivado del petróleo y no es biodegradable. Puede quedar expuesto en el ambiente indefinidamente contaminando suelo y agua, y llegando a la cadena alimenticia.</p> 
        <p> A pesar de ser liviano ocupa mucho espacio. Es el material de preferencia para empaquetar, proteger muchos productos o servir alimentos. No todos los telgopores son iguales ni tienen el mismo tratamiento. </p>
        <p> En la ciudad de Tandil se fabrican ladrillos que contienen un 50% de  telgopor proveniente de embalajes. El Instituto de Física de Materiales de la Facultad de Ciencias Exactas de UNICEN analizó la composición más adecuada para fabricarlo y realizó los ensayos mecánicos de resistencia a la carga y análisis térmicos, evaluando las características para certificar su aptitud para la confección de viviendas. El proyecto articula con varios actores: la red de Puntos Limpios del Municipio recibe el  telgopor, la asociación Punto Verde Tandil se encarga de procesarlo para reducirlo a “bolitas” y la Fundación Pachacamac quién los fabrica y los vende. En el proyecto también colaboran la Facultad de Ciencias Económicas, el CINEA de la Facultad de Ciencias Humanas y la Mesa Solidaria. En este <a href="https://www.youtube.com/watch?v=La3INMHWuq4&amp;t=5s">video</a> se puede encontrar más información sobre este emprendimiento de reciclaje de Telgopor.</p>
        <p> Muchas veces compramos distintos productos que vienen embalados con grandes cantidades de Telgopor. Es conveniente que puedas acercarlo hasta alguno de los puntos limpios de tu Municipalidad.</p> 
    </div>


</div>

         );
    }
}
 
export default Otros;