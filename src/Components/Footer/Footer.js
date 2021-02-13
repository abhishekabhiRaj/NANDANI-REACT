import React from 'react';
import './Footer.scss'

function Footer(props) {
    return (
        <div className="col-12 Footer" >
        <div className="Line col-11 mx-auto" ></div>
           <div className="col-11 mx-auto Footer-box mt-3"  >
           <p> Developed by : {" "}{props.createrName}</p>
           <p>Contact Us :  {" "}{props.contact} </p>
           <p>Email : {" "} {props.email} </p>
           </div>
        </div>
    )
}

export default Footer;
