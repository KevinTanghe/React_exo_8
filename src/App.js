import React, { Component } from 'react'

export class App extends Component {

  state = {
    nombre: "1"
  }

  hello = () => {
    console.log("Bonjour");
  }

  check = (e) => {
    console.log(e.target)
  }
  render() {
    return (
      <div>
        <h1 onMouseOver={this.check}>Exercice 8</h1>
        <button onClick={console.log(this.state.nombre)}>Click Me</button>
      </div>
    )
  }
}

export default App
