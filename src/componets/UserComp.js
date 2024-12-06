import React,{ Component } from "react";

const UserComp = (props) =>{

    if(props.name == 'arun'){
        throw Error('not a user');
    }
    return(
        <div>
            <h1> user: {props.name}</h1>
            
        </div>
        
    )
}

export default UserComp