import React, {Component} from 'react';

export default class User extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:props.userName,
            phoneNo:props.phoneNo
        }
    }

    render(){
        return(
            <div id ="user">
                <img src="/images/stevejobs.jpg"/>
                <h2>Welcome {captilatize(this.state.userName)}</h2>
                <p>Your Phone Number : {this.state.phoneNo}</p>
            </div>
        );
    }
}

const captilatize = (str) =>{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}