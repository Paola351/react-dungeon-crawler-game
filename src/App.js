import React, { Component } from 'react'
import './App.css'
import Board from './Board'

class App extends Component {
  constructor () {
    super()
    this.state = {
      gameId: 1
    }
    // default board values:
    this.rows = 30
    this.columns = 30
    this.minRooms = 15
    this.maxRooms = 20
    this.minRoomSide = 8
    this.maxRoomSide = 15
    this.items = [
      {itemType: 'armor', itemName: 'chest armor', resistance: 5}, 
      {itemType: 'armor', itemName: 'leg armor', resistance: 3},
      {itemType: 'armor', itemName: 'helm', resistance: 2}, 
      {itemType: 'armor', itemName: 'gloves', resistance: 1},
      // {itemType: 'weapon', itemName: 'knife', attack: 5},
      // {itemType: 'weapon', itemName: 'mace', attack: 8},
      {itemType: 'weapon', itemName: 'sword', attack: 10},
      {itemType: 'potion', itemName: 'potion', health: 8},
      {itemType: 'potion', itemName: 'potion', health: 8},
      {itemType: 'potion', itemName: 'potion', health: 8}
    ]
    this.enemies = [
      {enemyType: 'smallEnemy', health: 5, attack: 4, givenXP: 10},
      {enemyType: 'medEnemy', health: 15, attack: 8, givenXP: 15},
      {enemyType: 'largeEnemy', health: 25, attack: 12, givenXP: 20}
    ]
  }

  // change the gameId to render a new game:
  newGame () {
    this.setState({ gameId: this.state.gameId + 1 })
  }

  render() {
    return (
      <div className="App">
        <h1>React Dungeon Crawler Game</h1>
        <Board
          key={this.state.gameId}
          rows={this.rows}
          columns={this.columns}
          minRooms={this.minRooms}
          maxRooms={this.maxRooms}
          minRoomSide={this.minRoomSide}
          maxRoomSide={this.maxRoomSide}
          items={this.items}
          enemies={this.enemies}
        />
      </div>
    )
  }
}

export default App
