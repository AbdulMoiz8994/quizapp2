import React, { useEffect, useState } from 'react';
import './App.css';

// import api comp
import {FetchAPI} from './Services/index'
//import types
import {QuestionObjTYPE} from './Types/types'
import {QuestionCards} from './Components/index'

function App() {

let[quiz,setQuiz]=useState<QuestionObjTYPE[]>([])

useEffect(() =>{
  //(fetchAPI) it will retrun promise that  why we are using async await
  async function getQuiz(){
   const questions:QuestionObjTYPE[]= await FetchAPI(10,"easy") 
   console.log(questions);
   setQuiz(questions)
  }
   getQuiz();
},[])
  return (
    <div className="App">
      <QuestionCards quiz={quiz}/>
    </div>
  );
}

export default App;
