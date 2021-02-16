import React, { Component } from 'react'


export default class Items extends Component  {
  
    

    render() {
      let helmName = ''
      let helmDropLocation = ''
      let helmBoss = ''
      if(typeof this.props.helm != 'undefined'){
        helmName = this.props.helm.item_name
        helmDropLocation = this.props.helm.item_location
        helmBoss =  this.props.helm.item_source
      }
      let neckName = ''
      let neckDropLocation = ''
      let neckBoss = ''
      if(typeof this.props.neck != 'undefined'){
        neckName = this.props.neck.item_name
        neckDropLocation = this.props.neck.item_location
        neckBoss =  this.props.neck.item_source
      }
      let backName = ''
      let backDropLocation = ''
      let backBoss = ''
      if(typeof this.props.back != 'undefined'){
        backName = this.props.back.item_name
        backDropLocation = this.props.back.item_location
        backBoss =  this.props.back.item_source
      }
      let shoulderName = ''
      let shoulderDropLocation = ''
      let shoulderBoss = ''
      if(typeof this.props.shoulder != 'undefined'){
        shoulderName = this.props.shoulder.item_name
        shoulderDropLocation = this.props.shoulder.item_location
        shoulderBoss =  this.props.shoulder.item_source
      }
      let chestName = ''
      let chestDropLocation = ''
      let chestBoss = ''
      if(typeof this.props.chest != 'undefined'){
        chestName = this.props.chest.item_name
        chestDropLocation = this.props.chest.item_location
        chestBoss =  this.props.chest.item_source
      }
      let wristName = ''
      let wristDropLocation = ''
      let wristBoss = ''
      if(typeof this.props.wrist != 'undefined'){
        wristName = this.props.wrist.item_name
        wristDropLocation = this.props.wrist.item_location
        wristBoss =  this.props.wrist.item_source
      }
      let glovesName = ''
      let glovesDropLocation = ''
      let glovesBoss = ''
      if(typeof this.props.gloves != 'undefined'){
        glovesName = this.props.gloves.item_name
        glovesDropLocation = this.props.gloves.item_location
        glovesBoss =  this.props.gloves.item_source
      }
      let waistName = ''
      let waistDropLocation = ''
      let waistBoss = ''
      if(typeof this.props.waist != 'undefined'){
        waistName = this.props.waist.item_name
        waistDropLocation = this.props.waist.item_location
        waistBoss =  this.props.waist.item_source
      }
      let legsName = ''
      let legsDropLocation = ''
      let legsBoss = ''
      if(typeof this.props.legs != 'undefined'){
        legsName = this.props.legs.item_name
        legsDropLocation = this.props.legs.item_location
        legsBoss =  this.props.legs.item_source
      }
      let bootsName = ''
      let bootsDropLocation = ''
      let bootsBoss = ''
      if(typeof this.props.boots != 'undefined'){
        bootsName = this.props.boots.item_name
        bootsDropLocation = this.props.boots.item_location
        bootsBoss =  this.props.boots.item_source
      }
      let ring1Name = ''
      let ring1DropLocation = ''
      let ring1Boss = ''
      if(typeof this.props.ring1 != 'undefined'){
        ring1Name = this.props.ring1.item_name
        ring1DropLocation = this.props.ring1.item_location
        ring1Boss =  this.props.ring1.item_source
      }
      let ring2Name = ''
      let ring2DropLocation = ''
      let ring2Boss = ''
      if(typeof this.props.ring2 != 'undefined'){
        ring2Name = this.props.ring2.item_name
        ring2DropLocation = this.props.ring2.item_location
        ring2Boss =  this.props.ring2.item_source
      }
      let weapon1Name = ''
      let weapon1DropLocation = ''
      let weapon1Boss = ''
      if(typeof this.props.weapon1 != 'undefined'){
        weapon1Name = this.props.weapon1.item_name
        weapon1DropLocation = this.props.weapon1.item_location
        weapon1Boss =  this.props.weapon1.item_source
      }

      let weapon2Name = 'No Off Hand'
      let weapon2DropLocation = ''
      let weapon2Boss = ''
      let weapon2Drop = ''
      let weapon2OffHand = ''
      if(typeof this.props.weapon2 != 'undefined'){
        weapon2Name = this.props.weapon2.item_name
        weapon2DropLocation = this.props.weapon2.item_location
        weapon2Boss =  this.props.weapon2.item_source
        weapon2OffHand = 'Off-Hand: '
        weapon2Drop = `Drops in: ${weapon2DropLocation} off of ${weapon2Boss}`
      }

        return (
          <div>
            <p>Helm: {helmName}</p>
            <p>Drops in: {helmDropLocation} off of {helmBoss}</p>
            <hr></hr>
            <p>Neck: {neckName}</p>
            <p>Drops in: {neckDropLocation} off of {neckBoss}</p>
            <hr></hr>
            <p>Shoulder: {shoulderName}</p>
            <p>Drops in: {shoulderDropLocation} off of {shoulderBoss}</p>
            <hr></hr>
            <p>Cloak: {backName}</p>
            <p>Drops in: {backDropLocation} off of {backBoss}</p>
            <hr></hr>
            <p>Chest: {chestName}</p>
            <p>Drops in: {chestDropLocation} off of {chestBoss}</p>
            <hr></hr>
            <p>Wrist: {wristName}</p>
            <p>Drops in: {wristDropLocation} off of {wristBoss}</p>
            <hr></hr>
            <p>Gloves: {glovesName}</p>
            <p>Drops in: {glovesDropLocation} off of {glovesBoss}</p>
            <hr></hr>
            <p>Waist: {waistName}</p>
            <p>Drops in: {waistDropLocation} off of {waistBoss}</p>
            <hr></hr>
            <p>Legs: {legsName}</p>
            <p>Drops in: {legsDropLocation} off of {legsBoss}</p>
            <hr></hr>
            <p>Boots: {bootsName}</p>
            <p>Drops in: {bootsDropLocation} off of {bootsBoss}</p>
            <hr></hr>
            <p>Ring 1: {ring1Name}</p>
            <p>Drops in: {ring1DropLocation} off of {ring1Boss}</p>
            <hr></hr>
            <p>Ring 2: {ring2Name}</p>
            <p>Drops in: {ring2DropLocation} off of {ring2Boss}</p>
            <hr></hr>
            <p>Main Hand Weapon: {weapon1Name}</p>
            <p>Drops in: {weapon1DropLocation} off of {weapon1Boss}</p>
            <hr></hr>
            <p>{weapon2OffHand}{weapon2Name}</p>
            <p>{weapon2Drop}</p>
            <hr></hr>
            
          </div>
        )
    }
}


