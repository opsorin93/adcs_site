import React from "react";
import "./LandingPage.scss";

export default class LandingPage extends React.Component{

render(){
   const aboutUs = "Despre noi"; 
   const project = "Proiecte";
   const services = "Services";
   const support = " Suport";
   const contact = " Contact";
   const search = "Cauta";

   return (
    <div className= "meniu"> 
        <button className="bar"> {aboutUs}  </button>
        <button className="bar"> {project}  </button>
        <button className="bar"> {services}  </button>
        <button className="bar"> {support}  </button>
        <button className="bar"> {contact}  </button>                                            
        <div> 
            <input type="text" placeholder="Cauta.."/> 
            <button type="button" />   
        </div>  
        <button className="LR">  Login </button>
        <button className="LR"> Register </button>
    </div>
   ); 
}
}
