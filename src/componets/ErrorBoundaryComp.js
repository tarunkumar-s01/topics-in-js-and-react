import React,{ Component} from "react";

class ErrorBoundaryComp extends Component{
    constructor(){
        super();

        this.state ={
            iscond:false

        }
    }
    static getDerivedStateFromError(){
        return {
            iscond:true
        }
    }
    componentDidCatch(error){
        console.log(error);
    }
    render(){
        if(this.state.iscond){
            return <div>not a user</div>

        }
        return this.props.children;    
    }
    
}

export default ErrorBoundaryComp