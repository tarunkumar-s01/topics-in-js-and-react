import React, { Component } from "react";
import MyHocComp from "./MyHocComp";

class HoverCounterComp extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         counts:0
    //     }
    // }
    // Clickthebuttons = () =>{
    //     this.setState((prevstate)=>({counts:prevstate.counts+1}));

    // }
    render(){
        return(
            <div>
                <h2>count : {this.props.count}</h2>
                <button onClick={this.props.incrementcounter}>count++</button>
                <button onMouseOver={()=>this.props.incrementcounter()}>move the mouse</button>
            </div>
        );
    }
}

export default MyHocComp(HoverCounterComp,5)