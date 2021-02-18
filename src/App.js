import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import HomePage from './routes/HomePage/HomePage'
import Information from './routes/Information/Information';
import './app.css'
import FuryWarrior from './routes/classes/FuryWarrior';
import ArmsWarrior from './routes/classes/ArmsWarrior';
import ProtectionWarrior from './routes/classes/ProtectionWarrior';
import MarksmanHunter from './routes/classes/MarksmanHunter';
import BeastMasteryHunter from './routes/classes/BeastMasteryHunter';
import SurvivalHunter from './routes/classes/SurvivalHunter';
class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  render(){
    return (
      <div className="App">
        <header>
          <h1>Gear Finder</h1>
        </header>
        <main className="App__main">
        {this.state.hasError && <p>There was an error! Oh no!</p>}
        <BrowserRouter>
        <Switch>
              
              <Route
                path='/'
                component={Information}
                exact
              />
              <Route
                path='/homepage'
                component={HomePage}
              />
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
            </Switch>
            </BrowserRouter>         
        </main>
      </div>
    );
  }
  
}

export default App;
