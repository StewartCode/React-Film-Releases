import React, {Component} from "react";
import ListData from "./listData";
import AddButton from "./addButtons.js"
import Url from "./url";

class DataBreakdown extends Component{

  render(){
    const data = this.props.dataSet.map((x) => {
        return(
          <ListData key= {x.id} name={x.name} url={x.url}className="movies" allData={data} />
        )
    })
      return (
        <div className="movies">
            <Url data= {data} />
            <AddButton name= {data}/>
       </div>
    )
  }

}


export default DataBreakdown;
