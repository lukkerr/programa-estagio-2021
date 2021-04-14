import React from "react";
import Model from "../model"

class Map extends React.Component {
    
    componentDidMount () {
        const model = new Model();
        model.getMapa(this.props.id)    
    }
    
    render () {
        return <div id={this.props.id} />    
    }
}


export default Map;