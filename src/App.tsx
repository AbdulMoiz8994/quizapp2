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
useEffect(() =>{
  //(fetchAPI) it will retrun promise that  why we are using async await
  async function getQuiz(){
   const questions:QuizType[]= await FetchAPI(10,"easy") 
   console.log(questions);
   setQuiz(questions)
  }
   getQuiz();
},[])
//laoding state  becauase we are calling api it takes some time
if(!quiz.length){
  return <h3> Loading...</h3>
}

  return (
    <div className="App">
      <QuestionCards 
      //[0] This array 0 will start from 0 question and array of 0 questions
      question={quiz[0].question}
      options={quiz[0].option}
      />
    </div>
  );
}

export default App;
