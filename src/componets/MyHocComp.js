import React,{ Component } from "react";

const MyHocComp = (Wrappercomp,val) =>{
    class Hoc extends Component{
        constructor(props){
            super(props);
            this.state={
                count:0
            }
        }
        incrementcounter = () =>{
            this.setState((prevstate)=>({count:prevstate.count+val}));
    
        }
        render(){
            return <Wrappercomp count={this.state.count} incrementcounter={this.incrementcounter}></Wrappercomp>
        }
    }
    
     return Hoc;   
    
}
export default MyHocComp