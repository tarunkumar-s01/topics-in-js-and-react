import React, { Component } from "react";
import MyHocComp from "./MyHocComp";

class ClickCounterComp extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         count:0
    //     }
    // }
    // Clickthebutton = () =>{
    //     this.setState((prevstate)=>({count:prevstate.count+1}));

    // }
    render(){
        return(
            <div>
                <h2>count : {this.props.count}</h2>
                <button onClick={this.props.incrementcounter}>count++</button>
            </div>
        )
    }
}

export default MyHocComp(ClickCounterComp,3)