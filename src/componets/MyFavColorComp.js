import React, { Component } from 'react'

class MyFavColorComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color:'red'
      }
    }
    // static getDerivedStateFromProps(props){
    //     return{
    //         color:props.newcolor
    //     }
    // }

    // componentDidMount(){
    //     setTimeout(()=>{this.setState({color:'pink'});},2000
    // )
    // }

    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML=`before update my favorite color is ${prevState.color}`;
    }
    change = () =>{
        this.setState({color:'blue'});
    }

    componentDidUpdate(){
        document.getElementById('afterupdate').innerHTML=`after update my favorite color is ${this.state.color}`;
    }


  render() {
    return (
      <div>
        <h2>This is  my favorite color </h2>
        <p>color is : <strong>{this.state.color}</strong></p>
        <div id='beforeupdate'></div>
        <div id='afterupdate'></div>
        <button type='button' className='btn btn-primary' onClick={this.change}>change color</button>
      </div>
    )
  }
}

export default MyFavColorComp