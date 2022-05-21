import React from 'react'
import './SavedResponses.css'

const SavedResponses = ({question, botAnswer}) => {

  return (
   <> 
    <div className='saved-response'>
     <p>Question: {question}</p>
     <p>Chatter Bot Answer: {botAnswer}</p>
    </div>
   </>
  )
}

export default SavedResponses; 