import React, {Component} from 'react';

export default class Driver extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="driverOb">
                <div id="data">
                    <b>{captilatize(this.props.userName)}</b>
                    <br/>
                    Pick Up: {this.props.checkpoint}
                    <br/>
                    To: {this.props.company}
                </div>
            </div>
        );
    }
}

const captilatize = (str) =>{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}