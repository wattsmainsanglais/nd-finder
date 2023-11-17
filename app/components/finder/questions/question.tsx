

import React, { JSXElementConstructor } from 'react'

import images from '../flowerList'

export interface UserProps {
    question: string;
    one: string;
    two: string;
    three: string;
    
  }


export default function Question({handlesetFoundPics ,isactive, question, one, two, three, }: UserProps){

    const answerQuestion = (e) => {


    }


    return(
        <>
            <h2>{question}</h2>
            <ul>
                <li>{one}<aside>{isactive.alt}</aside></li>
                <li>{two}</li>
                <li>{three}</li>
            </ul>
        
        
        </>
    )
}