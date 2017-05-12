import React, { Component } from 'react'
import marked from 'marked'
/*class Previewer extends Component {
  render() {
    return (
      <div id='preview'>
        <p>Previewer goes here.</p>
      </div>
    )
  }
}*/

const Previewer = ({ sourceText }) => {
  const createMarkup = () => ( { __html: marked(sourceText) } )
  return (
    <div>
    <h2>Preview</h2>
    <hr />
    <div id='preview' dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

export default Previewer
