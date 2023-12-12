

import React, { JSXElementConstructor } from 'react'

import images, {imageArray} from '../flowerList'



export interface UserProps {
    handlesetFoundPics: Function,
    isactive: imageArray,
    question: string,
 
    
  }


export default function Question({handlesetFoundPics ,isactive, question, }: UserProps){

   


    let answerArray:string[] = isactive.answerlist;

    return(
        <>
            <h2>{question}</h2>
            <ul>
                {answerArray.map( (answer, index) => (
                    <li key={index} onClick={() => handlesetFoundPics(answer, isactive)}>{answer}</li>
                ))
                
                }
            </ul>
        
        
        </>
    )
}




