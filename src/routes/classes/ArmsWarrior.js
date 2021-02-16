import React, { Component } from 'react'
import Items from './Items'




export default class ArmsWarrior extends Component {
  state= {
    items: []
  }

  getItemData() {
    fetch(`https://thawing-bayou-76863.herokuapp.com/api/items/warrior/arms`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Hey, something went wrong')
            }
            return response.json()
        })
        .then(data => {
            this.setState({
                items: data
            })
        })
        .catch(err => {
            console.log(err)
        })
        
}

componentDidMount(){
  this.getItemData();
}

  render(){
    const items = {
      helm: this.state.items[0],
      neck: this.state.items[1],
      shoulder: this.state.items[2],
      back: this.state.items[3],
      chest: this.state.items[4],
      wrist: this.state.items[5],
      gloves: this.state.items[6],
      waist: this.state.items[7],
      legs: this.state.items[8],
      boots: this.state.items[9],
      ring1: this.state.items[10],
      ring2: this.state.items[11],
      weapon1: this.state.items[12]
    }
    return(
      <Items helm={items.helm} neck={items.neck} shoulder={items.shoulder} back={items.back}
       chest={items.chest} wrist={items.wrist} gloves={items.gloves} waist={items.waist} legs={items.legs}
       boots={items.boots} ring1={items.ring1} ring2={items.ring2} weapon1={items.weapon1} weapon2={items.weapon2}/>
    )
  }
}
