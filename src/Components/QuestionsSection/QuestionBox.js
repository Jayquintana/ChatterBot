import React from 'react'
import './QuestionBox.css'

const QuestionBox = () => {
  return (
   <> 
    <h1>Chatter Bot</h1>
      <div className='text-container'>
        <input className='text-box' type="text"required/>
        <p className='askQuestion'>Ask A Question</p>
      </div>  
   </>
  )
}

export default QuestionBox; 