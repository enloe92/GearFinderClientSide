import React, { Component } from 'react'
import './HomePage.css'
import Character from '../../components/Character/Character'
export default class HomePage extends Component {
  render(){
    return(
      
        <div>
            <ul>
            <Character />
            </ul>
            
            <div className="characters-list">                
            </div>
        </div>
      
    )
  }
}