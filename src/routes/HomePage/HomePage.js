import React, { Component } from 'react'
import './HomePage.css'
import Character from '../../components/Character/Character'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render(){
    return(
      
        <div>
          <nav className="header">
                <Link to="/homepage">Home</Link>
                <span>|</span>
                <Link to="/">Information</Link>
      </nav>
            
            <Character />
            
        </div>
      
    )
  }
}