// import { type } from "node:os"

//This is orginal type of api 
export type QuestionObjTYPE={
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

//copy of those things which will render in the in web page

export type QuizType ={
    question: string
    answer: string
    option: string[]
}

export type Props={
    question: string,
    options: string[]
}