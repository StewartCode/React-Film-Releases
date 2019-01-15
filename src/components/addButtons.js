import React, {Component} from "react";
class AddButton extends Component{

  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
    this.button = this.button.bind(this);
  }

  button(){
    this.setState(() => {
      return
    });
  }

render(){
  return (
    <h1> "Hello World "</h1>,
    <h1> {this.props.data} </h1>,
    <button onClick={this.button}> Switch </button>

    )
  }
}


export default AddButton
