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
          <div className="letter">{newsletter} </div>
          <div className="contact"> {conctat}  
          <p> ADCS
           <p> Adress :B-dul Eroilor Nr. 4, 
              400129 Cluj-Napoca, Romania
             <p> Tel: +40 720 479 515</p><p> office@adcs.ro</p>
           </p>  
          </p>  
              

         </div>
          <div className="retele"> {socialNetwork}  </div>
          <div className="support"> {support}  </div>
          </div>  
      );
    }













}