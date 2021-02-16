import React, { Component } from 'react'
import './Character.css'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'
import FuryWarrior from '../../routes/classes/FuryWarrior';
import ArmsWarrior from '../../routes/classes/ArmsWarrior'
import ProtectionWarrior from '../../routes/classes/ProtectionWarrior';
import MarksmanHunter from '../../routes/classes/MarksmanHunter';
import BeastMasteryHunter from '../../routes/classes/BeastMasteryHunter';
import SurvivalHunter from '../../routes/classes/SurvivalHunter';


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
      <li className="character">
            <div>
              <h2>
                <nav>
                <Link to="/">Home</Link>
                </nav>
                <h3>Warrior</h3>
                <nav>
                <Link to="/fury/warrior">Fury  |</Link>
                <Link to="/arms/warrior">  Arms  |</Link>
                <Link to="/protection/warrior">  Protection</Link>
                </nav>
                <h3>Hunter</h3>
                <nav>
                <Link to="/marksman/hunter">Marksman  |</Link>
                <Link to="/beastmastery/hunter">  Beast Mastery  |</Link>
                <Link to="/survival/hunter">  Survival</Link>
                </nav>
              <Route 
              path="/fury/warrior"
              component={FuryWarrior}
              exact/>
              <Route 
              path="/arms/warrior"
              component={ArmsWarrior}
              exact/>
              <Route 
              path="/protection/warrior"
              component={ProtectionWarrior}
              exact/>
              <Route 
              path="/marksman/hunter"
              component={MarksmanHunter}
              exact/>
              <Route 
              path="/beastmastery/hunter"
              component={BeastMasteryHunter}
              exact/>
              <Route 
              path="/survival/hunter"
              component={SurvivalHunter}
              exact/>
              </h2>
            </div>
            </li>
          </div>
    )
  }
}