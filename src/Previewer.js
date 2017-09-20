import React from 'react'
import marked from 'marked'

const Previewer = ({ sourceText }) => {
  const createMarkup = () => ({ __html: marked(sourceText) })
  return (
    <div>
      <h2>Preview</h2>
      <hr />
      <div id='preview' dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

export default Previewer
