import React, { Component } from "react";

class ConditionalrenComp extends Component {


    constructor(){
        super();
        this.state={
            isCond:true
        }
    }


    render() {
       //  1.use of if else
       if(!this.state.isCond){
        return  <h2>Admin Logiin Successfully</h2>
       }
       else{
        return  <h2>User LogIIn Successfully</h2>
       }
    }
}

export default ConditionalrenComp;