import './App.css';
import QuestionBox from './Components/QuestionsSection/QuestionBox'
import SavedResponses from './Components/ResponseSection/SavedResponses'
import TalkingRobot from './Components/TalkingRobot/TalkingRobot';
import React, { useState, useEffect } from 'react';
const { Configuration, OpenAIApi } = require("openai");


function App() {
  const [userQuestion, setUserQuestion] = useState('')
  const [botAnswer, setBotAnswer] = useState('')
  const [responses, setResponses] = useState([])


    useEffect(() => {
    if(botAnswer && userQuestion) {
    createResponse()
    }
  }, [botAnswer]);



  const createResponse = () => {
  let saveResponse = {
    id: responses.length + 1,
    question: userQuestion,
    botAnswer: botAnswer
  }
    responses.push(saveResponse)
    setUserQuestion('')
    setBotAnswer('')
  }

    const displayResponse = () => {
      let result = responses.map((answer, i) => {
        return (<SavedResponses key={i} botAnswer={answer.botAnswer} setBotAnswer={setBotAnswer}  question={answer.question} />)
      })
      return result
    }

    const postQuestion = () => {
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion("text-davinci-002", {
      prompt: `${userQuestion}`,
      temperature: 0.9,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    })
    .then((response) => {
      console.log(response.data.choices);
      setBotAnswer(response.data.choices[0].text)
    }).catch(err => console.log(err))
    }

  return (
    <div className="App">
      <QuestionBox 
      postQuestion={postQuestion} 
      botAnswer={botAnswer} 
      userQuestion={userQuestion} 
      setUserQuestion={setUserQuestion} />
      <div className='responses-container'> 
        <h2 className='responses-text'>Responses</h2>
      {displayResponse()}
      </div>
      < TalkingRobot />
    </div>
  )
}

export default App;
