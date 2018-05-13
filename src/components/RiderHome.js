import React, {Component} from 'react';
import User from './User';
import Driver from './Driver';

export default class RiderHome extends Component{
    constructor(props){
        super(props);
        this.state ={
            name : window.state["name"],
            phoneNo:window.state.phoneNo,
            loading: true,
            noDriver: true
        };
        const url = window.ip + "getMyDriver";

        var options ={
            uri: url,
            method: "POST",
            json:{
                "phoneNumber": this.state.phoneNo
            }
        };

        const request = require('request');
        request(options,(error, response, body) => {
            this.setState({loading: false})
            console.log(body.driver);
                data = body;
                this.setState({noDriver:false});
            
        });
    }

    render(){
        if(this.state.loading){
            return(
                <div><h3>Loading . . .</h3></div>
            );
        }
        else if(this.state.noDriver){
            return(
                <div>
                    <User userName={this.state.name} phoneNo={this.state.phoneNo}/>

                    <div id="selection">
                    Sorry You Have No Driver . . .
                    </div>
                </div>
            );
        }
        return(
            <div>
                <User userName={this.state.name} phoneNo={this.state.phoneNo}/>
            
                <div id="selection">
                    {
                     <Driver userName = {data.driver.name} checkpoint = {data.fetchPoint} company = {data.driver.company} />
                    }
                <div id = "details">
                <p>{"Do you want to be fetched  at " + data.fetchPoint + " on " + details.time + "?"}</p>
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

let data = null;

const details = {time: "8:00am"}

const handleAccept = () => {
    const url = window.ip + "driverSubmit";
    var options ={
        uri: url,
        method: "POST",
        json:{
            "phoneNumber": this.state.phoneNo,
            "type": "accept"
        }
    };

    const request = require('request');
        request(options,(error, response, body) => {
            console.log(body);
        });

    alert("Accepted");
    
}

const handleReject = () => {
    const url = window.ip + "riderSubmit";
    var options ={
        uri: url,
        method: "POST",
        json:{
            "phoneNumber": this.state.phoneNo,
            "type": "reject"
        }
    };

    const request = require('request');
        request(options,(error, response, body) => {
            console.log(body);
        });
    alert("Rejected");
}