import './App.css';
import QuestionBox from '/Users/jayp/Desktop/application-projects/chatter-box/src/Components/QuestionsSection/QuestionBox.js'
import SavedResponses from '/Users/jayp/Desktop/application-projects/chatter-box/src/Components/ResponseSection/SavedResponses.js'
import React, { useState } from 'react';
const { Configuration, OpenAIApi } = require("openai");


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
      console.log(response.data.choices[0].text)
    })

    }

  return (
    <div className="App">
      <QuestionBox 
      postQuestion={postQuestion} 
      setResponses={setResponses} 
      responses={responses} 
      botAnswer={botAnswer} 
      userQuestion={userQuestion} 
      setUserQuestion={setUserQuestion} />
      {displayResponse()}
    </div>
  )
}

export default App;
