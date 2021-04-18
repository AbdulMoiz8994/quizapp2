import React, { useState,useRef } from 'react'
import {Props} from '../Types/types'


const QuestionCards:React.FC<Props> = ({question,options,callback}) => {
    // console.log(question,options);
    
    let[selectAns,setselectAns]=useState("")
let values=useRef(null);

    const onChnageFUnc=(e:any)=>{
           const name= values.current
          //  console.log(name);
           setselectAns(e.target.value)
    }
    return (
  <div>
      <h1>{question}</h1>
      <form onSubmit={(e:React.FormEvent<EventTarget>) => callback(e,selectAns)}>
       {options.map((optArray:string) =>{
         return(
          //  <ul key={optArray} style={{listStyle: 'none',cursor:'pointer',boxSizing: 'border-box'}}>
          //    <li>{optArray}</li>
          //  </ul>
          <div  key={optArray}>
          <label>
            <input type="radio" name="opt" value={optArray} ref={values} onChange={onChnageFUnc}/>
            {optArray}
          </label>
          </div>
         )
       })}
   {/* <input type="submit"/> */}
       <button type="submit">Next Question</button>
       </form>
  </div>
    )
}
export default QuestionCards;