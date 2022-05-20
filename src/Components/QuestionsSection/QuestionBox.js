import React from 'react'
import './QuestionBox.css'

const QuestionBox = ({userQuestion, setUserQuestion, responses, botAnswer, }) => {


const getInput = (e) => {
 setUserQuestion(e.target.value)
}

const addResponse = () => {
 let saveResponse = {
  id: responses.length + 1,
  question: userQuestion,
  botAnswer: botAnswer
 }
 if (saveResponse.question) {
  responses.push(saveResponse)
 }
 setUserQuestion('')
}

  return (
   <> 
    <h1>Chatter Bot</h1>
      <div className='text-container'>
        <input value={userQuestion} onChange={e => getInput(e)} className='text-box' placeholder='Whats todays date?' type="text"required/>
        <p onClick={addResponse} className='ask-question'>Ask A Question</p>
      </div>  
   </>
  )
}

export default QuestionBox; 