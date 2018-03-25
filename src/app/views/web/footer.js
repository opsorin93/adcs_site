import React from "react";
import "./footer.scss";

export default class Footer extends React.Component{

    render(){
   
        const newsletter = "Newsletter";
        const conctat = "Contact";
        const socialNetwork ="Retele Sociale";
        const support = "Support";
      
      return (
       <div className = "Footer">  
          <div className="letter" > {newsletter} </div>
          <div className="contact"> {conctat}  </div>
          <div className="retele"> {socialNetwork}  </div>
          <div className="support"> {support}  </div>
        </div>  
      );
  } 













}