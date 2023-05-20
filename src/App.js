import "../src/App.css"


function App() {
  return (
    <div className="App">
       <div className='ctn-menu'>
          <p>KM</p>
       </div>
       <div className='ctn-main'>
          <div className='ctn-main imagen'>

          </div>
          <div className='ctn-main descripcion'>
             <h1><span>Karen</span> Choquecallata Mancilla</h1>
             <p className="ctn-main descripcion-detallada">Futura ingeniera de sistemas, he colaborado activamente en crear soluciones TI, como programadora en proyectos, 
                preparada y lista para enfrentar nuevos retos y resolver problemas tecnológicos, deseo colaborar en el área de desarrollo 
                de software, formando parte de una empresa que me permita ayudarle a cumplir con su misión</p>
              
          </div>
       </div>
     
       <div className="ctn-proyectos">
          <h2>Mis Proyectos</h2>
          <div className="proyects">
               <div className="card-proyect">
                  <h4>Pyxel</h4>
                  <img></img>
                  <a href="https://serene-feynman-bea74e.netlify.app/index.html">Visitar website</a>
               </div>
               <div className="card-proyect">
                  <h4>SAAD</h4>
                  <img></img>
                  <a href="http://hexacode.tis.cs.umss.edu.bo/">Visitar website</a>
               </div>
               <div className="card-proyect">
                  <h4>Pagina web Blender</h4>
                  <img></img>
                  <a href="http://hexacode.tis.cs.umss.edu.bo/">Visitar website</a>

               </div>
          </div>
       </div>
       <div className="ctn-habilidades">
          <h2>Habilidades</h2>
          <div className="ctn-cards-hability">
            <div className="card-hability">
               <h4 className="card-hability-titulo">Java</h4>
               <img className="card-hability-imagen" src={require('./Imagenes/java.png')} alt="imagen" />
            </div>
            <div className="card-hability">
               <h4 className="card-hability-titulo">Javascript</h4>
               <img className="card-hability-imagen" src={require('./Imagenes/javascript.png')} alt="imagen" />
            </div>
            <div className="card-hability">
               <h4 className="card-hability-titulo">React JS</h4>
               <img className="card-hability-imagen" src={require('./Imagenes/react.png')} alt="imagen" />
            </div>
          </div>

      
       </div>
       <div className="ctn-contactame">
         <h2>Contactame</h2>
          <ul>
            <li><a href="https://linkedin.com/in/karen-choquecallata-6294811b8" target="_blank" >Linkedln</a></li>
            <li><a href="" >Correo Electronico</a></li>
            <li><a href="#" >Celular</a></li>
           </ul>
       </div>
       

    </div>
  );
}

export default App;
