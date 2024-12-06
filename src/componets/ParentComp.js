import React, { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component{
    constructor(props){
        super(props);
        this.state={
            empName:'tarun',
            empsal:20000
        }
    }
    changeincremData = ()=>{
       
        this.setState((prevstate)=>({empName : 'tarunkumar s' ,empsal: prevstate.empsal+100}));
    }
    render(){
        const {gender,contact} = this.props;
        const {empName,empsal} = this.state;
        return(
            <div>
                <p>
                employee name : <strong>{empName}</strong> salary :<strong>{empsal}</strong>
                
                </p>
                <p>Gender:<strong>{gender}</strong> contact:<strong>{contact}</strong></p>
                <button onClick={()=>this.changeincremData()}>count++</button>
                <ChildComp name={empName} salary={empsal}></ChildComp>
            </div>

        );
    }
}
 export default ParentComp;