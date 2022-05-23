import React from 'react'
import './SavedResponses.css'

const SavedResponses = ({question, botAnswer}) => {

  return (
  <> 
    <div className='saved-response'>
      <p className='question-response'>Question: {question}</p>
      <p className='bot-response'>Chatter Bot: {botAnswer}</p>
    </div>
  </>
  )
}

export default SavedResponses; 