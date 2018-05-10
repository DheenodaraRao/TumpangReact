import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class MyNavigation extends Component{
    render(){
        return(
            <div id="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/faq">FaQ</NavLink></li>
                </ul>        
            </div>

        );
    }
}

const mystyle = {
    textDecoration: "none",
    display: "block",
    //color: "black",
    padding: "5px",
    backgroundColor: "darkblue",
    width: "120px",
    color: "white"
}
