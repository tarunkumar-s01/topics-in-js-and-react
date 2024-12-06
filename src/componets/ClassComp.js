import React, { Component } from "react";

class ClassComp extends Component {
    render() {

        return (
            <div>
                <h2>this is a {this.props.fname} component</h2>
                <p> I'm <strong>{this.props.fname} {this.props.lname}</strong> my salary {this.props.salary} gender:{this.props.gender} </p>

            </div>
        )
    }
}

export default ClassComp;