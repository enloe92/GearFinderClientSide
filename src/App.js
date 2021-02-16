import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import LoginPage from './routes/LoginPage/LoginPage'
import HomePage from './routes/HomePage/HomePage'
import CharacterCreationPage from './routes/CharacterCreationPage/CharacterCreationPage';
import FuryWarrior from './routes/classes/FuryWarrior'
import ArmsWarrior from './routes/classes/ArmsWarrior'

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
          <h1>Gear Optimizer</h1>
        </header>
        <main className="App__main">
        {this.state.hasError && <p>There was an error! Oh no!</p>}
        <BrowserRouter>
        <Switch>
            
              <Route
                path='/'
                component={HomePage}
              />
              <Route 
                path = '/fury/warrior'
                component={FuryWarrior}/>
                <Route 
                path = '/arms/warrior'
                component={ArmsWarrior}/>
              <Route
              path='/CharacterCreate'
              component={CharacterCreationPage}
              />
              <Route
              component={LoginPage}
            />
            </Switch>
            </BrowserRouter>         
        </main>
      </div>
    );
  }
  
}

export default App;
