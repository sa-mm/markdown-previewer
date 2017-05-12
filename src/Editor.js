import React, { Component } from 'react'

class Editor extends Component {
  render () {
    return (
      <div>
        <h2>Source</h2>
        <hr />
        <textarea id='editor' onChange={this.props.onChange} value={this.props.value} rows="20" cols="75"/>
      </div>
    )
  }
}

/*const Editor = ({ value, onChange }) => (
  <div >
    <p>Editor</p>
    <textarea id='editor' onChange={onChange} value={value} rows="10" cols="50" />
  </div >
)*/

export default Editor
