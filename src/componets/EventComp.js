import React, { Component, Fragment } from "react";

class EventComp extends Component{

    greeting =() =>{
        window.alert("hello everyone");
    };

    welcome = (...std) =>{
        window.alert(`hello punda's ${std}`);
    };
    render(){
        return (
            <Fragment>
                <h2>this is event component</h2>
                <button onClick={() => this.greeting()}>call greeting</button>
                <button onClick={() => this.welcome('santo','niti')}>call greeting</button>
                {/* <h2 onMouseOver={() => this.welcome('kishore','sanjay','jai')}>hover on me to call welcome</h2> */}
            </Fragment>
        );
    }
}

export default EventComp;