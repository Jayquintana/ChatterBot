import './QuestionBox.css'

const QuestionBox = ({userQuestion, setUserQuestion, responses, botAnswer, postQuestion, setBotAnswer}) => {


const getInput = (e) => {
  setUserQuestion(e.target.value)
}

const addResponse = () => {
  postQuestion()
}

  return (
  <> 
  <h1 className='chatter-bot'>Chatter Bot</h1>
    <div className='text-container'>
        <input value={userQuestion} onChange={e => getInput(e)} className='text-box' placeholder='How far away is the moon?' type="text"required/>
      <p onClick={addResponse} className='ask-question'>Ask A Question</p>
    </div>  
  </>
  )
}

export default QuestionBox; 