import React, {Component} from 'react';
import User from './User';
import Rider from './Rider';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            name : window.state["name"],
            phoneNo:window.state.phoneNo,
            loading: true,
            noRider: true
        };
        const url = window.ip + "getMyRiders";

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
            console.log(body.data);
            if(body.data.length != 0){
                data = body.data;
                this.setState({noRider:false});
            }
            
        });
    }

    render(){
        if(this.state.loading){
            return(
                <div><h3>Loading . . .</h3></div>
            );
        }
        else if(this.state.noRider){
            return(
                <div>
                    <User userName={this.state.name} phoneNo={this.state.phoneNo}/>

                    <div id="selection">
                    Sorry You Have No Riders . . .
                    </div>
                </div>
            );
        }
        return(
            <div>
                <User userName={this.state.name} phoneNo={this.state.phoneNo}/>
            
                <div id="selection">
                    {
                     data.map(x => <Rider userName = {x.name} checkpoint = {x.fetchPoint} company = {x.company}/>)
                    }
                <div id = "details">
                <p>{"Do you want to fetch them at " + data[0].fetchPoint + " on " + details.time + "?"}</p>
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
    alert("Accepted");

}

const handleReject = () => {
    alert("Rejected");
}