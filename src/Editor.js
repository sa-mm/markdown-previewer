import React, { Component } from 'react'

class Editor extends Component {
  render () {
    return (
      <div>
        <h2>Source</h2>
        <hr />
        <textarea id='editor' onChange={this.props.onChange} value={this.props.value} rows='20' cols='75' />
      </div>
    )
  }
}

export default Editor
