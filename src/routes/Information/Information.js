import React, { Component } from 'react'
import './Information.css'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage';

export default class Information extends Component {
  render(){
    return(
      
        <div>
            <nav className="header">
                <Link to="/homepage">Home</Link>
                <span>|</span>
                <Link to="/">Information</Link>
            </nav>
            <p>Welcome to Gear Finder! This application is designed to help you locate where and from what boss your best items drop in the most recent patch of World of Warcraft.</p>
            <p>Go to the Homepage to get started, then select your specific class and spec combination, your best items and where they can be acquired will be displayed!</p>
            
            
            <Route 
              path="/homepage"
              component={HomePage}
              exact/>
              

            
        </div>
      
    )
  }
}