import React, {Component} from 'react';

export default class Rider extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:props.userName,
        }
    }

    render(){
        return(
            <div id ="rider">
            <div id="data"><b>{this.state.userName}</b></div>
            </div>
        );
    }
}