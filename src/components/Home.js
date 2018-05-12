import React, {Component} from 'react';
import User from './User';
import Rider from './Rider';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            name : window.state["name"],
            phoneNo:"0123456789",
            loading: false
        };
        const url = window.ip + "getMyRiders";
        const request = require('request');
        request.post({url,body: this.state.phoneNo},(error, response, body) => {
                //more processing with the body
                console.log(body);
            this.setState({loading: false})
        });
    }

    render(){
        if(this.state.loading){
            return(
                <div><h3>Loading . . .</h3></div>
            );
        }
        return(
            <div>
                <User userName={this.state.name} phoneNo={this.state.phoneNo}/>

                <div id="selection">
                    {
                     data.map(x => <Rider userName = {x.userName} />)
                    }
                <div id = "details">
                <p>{"Do you want to fetch them at " + details.checkpoint + " on " + details.time + "?"}</p>
                </div>
                </div>

                
                    
                <div id = "buttons">
                <input type="button" id = "accept" value="Accept" onClick = {handleAccept}/>
                <input type="button" id = "reject" value="Reject" onClick = {handleReject}/>
                </div>
            </div>
        );
    }
}

const data = [
    {
        userName: "Ahmad",
    },
    {
        userName: "Chan",
    },
    {
        userName: "Wei Lun",
    }
]

const details = {checkpoint: "Syed Mashor Bus Stop", time: "8:00am"}

const handleAccept = () => {
    alert("Accepted");
}

const handleReject = () => {
    alert("Rejected");
}