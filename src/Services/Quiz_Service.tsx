import {QuestionObjTYPE,QuizType} from '../Types/types'


const suffleArray=(array: any[])=>{
 return  [...array].sort(() => Math.random() - 0.5)
}

//we are sending (totalQuestions and  level) in arrow via arguments
export const FetchAPI= async(totalQuestions: number,level:string): Promise<QuizType[]>=>{
    const fetchData=fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let {results}=await(await fetchData).json();
    console.log(results); 
    const quiz: QuizType[]=results.map((questionObj: QuestionObjTYPE) =>{
        return{
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: suffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
            //This concat help us to marge the options of array (incorrect_answers) and (correct_answer) 
        } 

    })
    return quiz

}