import React, { Component } from 'react'
import CHARACTER_CLASS_DATA from '../../data/data'

export default class CharacterCreationPage extends Component{
  state = {
    characterName: '',
    selectedClass: 'Warrior',
    selectedSpec: 'Fury',
  }
  
  handleSubmit = e => {
    e.preventDefault();

    const { addCharacter } = this.context;

    fetch('https://thawing-bayou-76863.herokuapp.com/api/character', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ character_name: this.state.characterName,
          character_class: this.state.selectedClass, 
          character_spec: this.state.selectedSpec,
          character_primary_stat: CHARACTER_CLASS_DATA.Classes[this.state.selectedClass].Specs[this.state.selectedSpec].Primary,
          character_secondary_stat: CHARACTER_CLASS_DATA.Classes[this.state.selectedClass].Specs[this.state.selectedSpec].Secondary,
          character_main_stat: CHARACTER_CLASS_DATA.Classes[this.state.selectedClass].Specs[this.state.selectedSpec].main
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('We could not post this new folder')
            }
            return response.json();
        })
        .then(data => {
            addCharacter(data);
            this.setState({ folderName: '' })
            this.props.history.goBack();
        })
        .catch(err => {
            alert(err);
        })
}

  

  render(){
    
    const Specs = Object.keys(CHARACTER_CLASS_DATA.Classes[this.state.selectedClass].Specs);
    return(
      <div>
  <form action="./CharacterBreakdown.html" className = "character-creation-form">
    <div>
      <label htmlFor="character_name">Character Name</label>
      <input name="user_name" id="LoginForm__user_name" onChange={(e) => this.setState({characterName: e.target.value})}></input>
    </div>
    <div>
      <span>Class </span>
      <select name="character-classes" value={this.state.selectedClass}
              onChange={(e) =>  this.setState({selectedClass: e.target.value, selectedSpec: Object.keys(CHARACTER_CLASS_DATA.Classes[e.target.value].Specs)[0]})}>
        <CharacterClasses classList={Object.keys(CHARACTER_CLASS_DATA.Classes)}/>
      </select>
      <span> Spec </span>
      <select name="character-classes-spec" value={this.state.selectedSpec}
              onChange={(e) => this.setState({selectedSpec: e.target.value})}>
        <CharacterSpec classList={Specs}/>  
      </select>
    </div>
    <div>
      <span>Stat Priority: </span>    
        <Stats spec={this.state.selectedSpec} selectedClass={this.state.selectedClass} />
      
    </div>
    <button className="submit-character">
      Submit New Character
    </button>
  </form>
</div>
    )
  }
}



function CharacterClasses( {classList = []} ){
  return(    
      classList.map(element => <option value={element}>{element}</option>
    )
  ) 
}

function CharacterSpec( {classList = []} ){
  return(    
      classList.map(element => <option value={element}>{element}</option>
    )
  ) 
}

function Stats ( {spec, selectedClass} ){
  return(
    <div>
      <p>Primary Stat: {CHARACTER_CLASS_DATA.Classes[selectedClass].Specs[spec].Primary}</p>
      <p>Secondary Stat: {CHARACTER_CLASS_DATA.Classes[selectedClass].Specs[spec].Secondary}</p>
    </div>
  )
}