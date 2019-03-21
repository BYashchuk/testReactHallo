import React, { Component } from 'react'
import Form from '../../components/form'
import './root.css'

class App extends Component {
  render() {
    return (
      <div>
        <header className="main">
          <h1>Main Header</h1>
        </header>
        <Form firstValur='Здесь будет значение инпута target' secValur='Здесь будет значение инпута refs' />
      </div>
    )
  }
}

export default App;
