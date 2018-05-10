import React, {Component} from 'react';

export default class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
      }

      handleSubmit(event) {
        alert('Hi: ' + this.state.userName);
        event.preventDefault();
      }
      
    render(){
        return(
            <div id="loginForm">
            <form onSubmit= {this.handleSubmit}>
                Name <br/>
                <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/> <br/> <br/>

                <input type="submit"  name="loginbutton" value="Login"/>
            </form>
            </div>
        );
    }
}
