import React from "react";

class HornedBeast extends React.Component{
    runder(){
        return(
            <>
      <h2>{this.props.title}</h2>
      <img src="{this.props.imgUrl}"alt="{this.props.title}"/>
      <p> {this.props.description}</p>
      </>
        )
    }
}
export default HornedBeast;

