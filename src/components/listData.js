import React, {Component} from "react";
import AddButton from "./addButtons.js";

class ListData extends Component{
  render(){
    return(
      <div>
          <p> {this.props.name} </p>
          <button className={this.props.id}>  {this.props.url} </button>
      </div>
    )
  }
}

export default ListData;
