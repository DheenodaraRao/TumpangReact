import React, {Component} from 'react';
import MyNavigation from './MyNavigation';

export default class Header extends Component{
    render(){
        return(
        <div id="header">
        <h1>Tumpang App</h1>
        <p>Easier way to car pool</p>
        <MyNavigation />
        </div>
        );
    }
}