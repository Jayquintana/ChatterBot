import './App.css';
import QuestionBox from '/Users/jayp/Desktop/application-projects/chatter-box/src/Components/QuestionsSection/QuestionBox.js'
import SavedResponses from '/Users/jayp/Desktop/application-projects/chatter-box/src/Components/ResponseSection/SavedResponses.js'
import React, { useState } from 'react';

function App() {
  const [userQuestion, setUserQuestion] = useState('')
  const [botAnswer, setBotAnswer] = useState('')
  const [responses, setResponses] = useState([])

    const displayResponse = () => {
      let result = responses.map((answer, i) => {
        return (<SavedResponses key={i} botAnswer={answer.botAnswer}  question={answer.question} />)
      })
      console.log(result);
      return result
    }

  return (
    <div className="App">
      <QuestionBox setResponses={setResponses} responses={responses} botAnswer={botAnswer} userQuestion={userQuestion} setUserQuestion={setUserQuestion} />
      {displayResponse()}
    </div>
  )
}

export default App;
