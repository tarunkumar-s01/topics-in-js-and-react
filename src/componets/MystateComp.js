import React, { Component } from "react";

class MystateComp extends Component{
    constructor(){
        super();
        this.state={
            empname:'tarun',
            empsal:50000
        }
    }

    changeStateData = ()=>{
        // this.setState({empname:'tarunkumar S',empsal:this.state.empsal+10000});
        this.setState((prevstate)=>({empname:'tarun kumar s', empsal:prevstate.empsal+10000}));
    }
    render(){
        return(
            <div>
                <h2>this is a state component</h2>
                <p>
                    employee name : <strong>{this.state.empname}</strong> salary :<strong>{this.state.empsal}</strong>
                </p>
                <button type='button' className="btn btn-primary" onClick={()=>this.changeStateData()}>change data</button>
            </div>

        );
    }
}

export default MystateComp;