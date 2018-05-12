import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Home from './Home';
import logindb from './nock-api';

export default class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            phoneNo:'',
            redirect: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
      }

      handleSubmit(event) {
        //alert('Hi: ' + this.state.userName + " " + this.state.phoneNo);
        event.preventDefault();
        
        const url = window.ip + "login";
        const request = require('request');

        var options ={
            uri: url,
            method: "POST",
            json:{
                "phoneNumber": this.state.phoneNo
            }
        };
        console.log(options);
        request(options,(error, response, body) => {
                //more processing with the body
                console.log(body);

                if(body.ok){
                window.state={name :this.state.userName, phoneNo:this.state.phoneNo};
                this.setState({redirect: true});
                }
                else{
                    alert(body.message);
                }
        });


        
        //window.state={name :this.state.userName, phoneNo:this.state.phoneNo};
        //this.setState({redirect: true});
        
      }
      
    render(){
        if(this.state.redirect) {
            return <Redirect to="/home" />;
        }
        return(
            <div id="loginForm">
            <form onSubmit= {this.handleSubmit}>
                Name <br/>
                <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/> <br/> <br/>

                Phone-No <br/>
                <input type="text" name="phoneNo" value={this.state.phoneNo} onChange={this.handleChange}/> <br/> <br/>

                <input type="submit"  name="loginbutton" value="Login"/>
            </form>
            </div>
        );
    }
}
