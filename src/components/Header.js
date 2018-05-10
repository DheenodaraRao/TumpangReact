import React, {Component} from 'react';
import MyNavigation from './MyNavigation';

export default class Header extends Component{
    render(){
        return(
        <div id="header">
        <p>Tumpang App
        </p> 
        <MyNavigation />
        </div>
        );
    }
}