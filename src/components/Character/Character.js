import React, { Component } from 'react'
import './Character.css'
import { Link } from 'react-router-dom';



export default class Character extends Component{
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }


  render(){
    return(
      <div>
      
            
              
                <h3>Warrior</h3>
                <nav className="classLinks">
                <Link to="/fury/warrior">Fury</Link>
                <span>|</span>
                <Link to="/arms/warrior">Arms</Link>
                <span>|</span>
                <Link to="/protection/warrior">Protection</Link>
                <span>|</span>
                </nav>
                <h3>Hunter</h3>
                <nav className="classLinks">
                <Link to="/marksman/hunter">Marksman</Link>
                <span>|</span>
                <Link to="/beastmastery/hunter">Beast Mastery</Link>
                <span>|</span>
                <Link to="/survival/hunter">Survival</Link>
                </nav>              
              
            
            
          </div>
    )
  }
}