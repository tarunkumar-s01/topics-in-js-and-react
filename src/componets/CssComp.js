import React, { Component } from "react";
import './ExternalCss.css';
import mymodule from './MyCss.module.css';

const CssComp = () =>{
    let circle={
        width:'100px',
        height:'100px',
        borderRadius:'50%',
        border:false?"2px solid red":"5px solid green",
        margin:'auto'
    }
    return(
        <div>
            <h1 style={{color:'blue',background:'aqua'}}>Yara antha paiyan na thaa antha paiyan</h1>
            <p style={circle}>Hi</p>

            <div className="txtPrimary">Hello Tarunkumar</div>
            <div className="txtDanger">hello snato</div>

            <div className={mymodule.special}>Hello</div>
        </div>
    );
}
export default CssComp;