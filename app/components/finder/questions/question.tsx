

import React, { JSXElementConstructor } from 'react'

import images from '../flowerList'

export interface UserProps {
    question: string;
    one: string;
    two: string;
    three: string;
    
  }


export default function Question({handlesetFoundPics ,isactive, question, }: UserProps){

    const answerQuestion = (e) => {


    }

    let answerArray:string[] = isactive.answerlist;

    return(
        <>
            <h2>{question}</h2>
            <ul>
                {answerArray.map( (answer) => (
                    <li onClick={() => handlesetFoundPics(answer, isactive)}>{answer}</li>
                ))
                
                }
            </ul>
        
        
        </>
    )
}