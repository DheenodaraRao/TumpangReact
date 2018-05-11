import React, {Component} from 'react';
import User from './User';

export default class Home extends Component{
    constructor(props){
        super(props);
            this.state ={
                name : window.state["name"],
                phoneNo:window.state["phoneNo"]
            };
    }

    render(){
        return(
            <div>
                <User userName={this.state.name} phoneNo={this.state.phoneNo}/>
            </div>
        );
    }
}