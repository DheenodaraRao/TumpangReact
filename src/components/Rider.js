import React, {Component} from 'react';

export default class Rider extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:props.userName,
            company:props.company,
            checkpoint:props.checkpoint
        }
    }

    render(){
        return(
            <div id ="rider">
            <div id="data">
            <b>{captilatize(this.state.userName)}</b>
            <br/>
            Pick Up: {this.state.checkpoint}
            <br/>
            To: {this.state.company}
            </div>
            </div>
        );
    }
}

const captilatize = (str) =>{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
