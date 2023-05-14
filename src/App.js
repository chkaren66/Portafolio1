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
       <div className="ctn-habilidades">
          <h2>Habilidades</h2>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Python</li>
            <li>Express JS</li>
          </ul>
       </div>
       <div className="ctn-proyectos">
          <h2>Mis Proyectos</h2>
       </div>
       <div className="ctn-contactame">
         <h2>Contactame</h2>
          <ul>
            <li><a href="#" >Linkedln</a></li>
            <li><a href="#" >Correo Electronico</a></li>
            <li><a href="#" >Celular</a></li>
           </ul>
       </div>

    </div>
  );
}

export default App;
