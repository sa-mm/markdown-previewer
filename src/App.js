import React, { Component } from 'react'
import Editor from './Editor.js'
import Previewer from './Previewer.js'
import defaultText from './DefaultText.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sourceText: defaultText
    }
    this.sourceChange = this.sourceChange.bind(this)
  }
  sourceChange(event) {
    this.setState({
      sourceText: event.target.value
    })
  }
  render() {
    const { sourceText } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
        </div>
        <div id="wrapper">
          <Editor onChange={this.sourceChange} value={sourceText} />
          <Previewer sourceText={sourceText} />
        </div>
      </div>
    );
  }
}

export default App
