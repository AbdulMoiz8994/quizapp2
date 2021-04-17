import React, { useEffect, useState } from 'react';
import './App.css';

// import api comp
import {FetchAPI} from './Services/index'
//import types
import {QuizType} from './Types/types'
import {QuestionCards} from './Components/index'

function App() {

let[quiz,setQuiz]=useState<QuizType[]>([])
let[score,setScore]=useState(0)
let[number,setNumber]=useState(1)

let[currentState,setCurrentState]=useState(0)


useEffect(() =>{
  //(fetchAPI) it will retrun promise that  why we are using async await
  async function getQuiz(){
   const questions:QuizType[]= await FetchAPI(10,"easy") 
   console.log(questions);
   setQuiz(questions)
  }
   getQuiz();
},[])


//handle submit for next question
//ya callback ja raha ha wo ak adad event la kar ja raha ha tou re-render na karee page ko tou hum e.preventDefault()
const handleSubmit=(e: React.FormEvent<EventTarget>,useAns: string) =>{
  e.preventDefault()
  const correctAnsScore:QuizType=quiz[currentState]
  if(useAns ===correctAnsScore.answer){
    setScore(++score)
  }
  if(currentState !== quiz.length -1){
     setCurrentState(++currentState)
     setNumber(++number)
}else{
  setCurrentState(0)
  setNumber(0)
  setScore(0)
}
}

//laoding state  becauase we are calling api it takes some time
if(!quiz.length){
  return <h3> Loading...</h3>
}

  return (
    <div className="App">
      <h1>{score}</h1>
      <h3>{number}/{quiz.length}</h3>
      <QuestionCards 
      //[0] This array 0 will start from 0 question and array of 0 questions
      question={quiz[currentState].question}
      options={quiz[currentState].option}
      callback={handleSubmit}
      />
    </div>
  );
}

export default App;
