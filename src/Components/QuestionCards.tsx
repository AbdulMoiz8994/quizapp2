import React from 'react'
import {Props} from '../Types/types'


const QuestionCards:React.FC<Props> = ({question,options}) => {
    console.log(question,options);
    
    return (
  <div>
      <h1>{question}</h1>
       {options.map((optArray:string) =>{
         return(
           <ul key={optArray} style={{listStyle: 'none',cursor:'pointer',boxSizing: 'border-box'}}>
             <li>{optArray}</li>
           </ul>
         )
       })}
       <button>Next Question</button>
  </div>
    )
}
export default QuestionCards;