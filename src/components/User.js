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
                <h2>Welcome {this.state.userName}</h2>
                <p>Your Phone Number : {this.state.phoneNo}</p>
            </div>
        );
    }
}