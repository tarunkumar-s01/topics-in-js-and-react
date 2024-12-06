import React, { Component } from "react";

const ChildComp = (props) => {
    return (
        <div>
            <h2>this is child component</h2>
            <p>Name:{props.name} Salary:{props.salary}</p>
        </div>
    )
}

export default ChildComp;