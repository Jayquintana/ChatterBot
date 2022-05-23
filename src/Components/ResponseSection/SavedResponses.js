import React from 'react'
import './SavedResponses.css'

const SavedResponses = ({question, botAnswer}) => {

  return (
  <div className='responses-container'> 
    <h2>Responses</h2>
    <div className='saved-response'>
      <p className='question-response'>Question: {question}</p>
      <p className='bot-response'>Chatter Bot: {botAnswer}</p>
    </div>
  </div>
  )
}

export default SavedResponses; 