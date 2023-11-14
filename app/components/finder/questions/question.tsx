

import React, { JSXElementConstructor } from 'react'

import images from '../flowerList'

export interface UserProps {
    question: string;
    one: string;
    two: string;
    three: string;
    
  }


export default function Question({question, one, two, three}: UserProps){


    return(
        <>
            <h2>{question}</h2>
            <ul>
                <li>{one}</li>
                <li>{two}</li>
                <li>{three}</li>
            </ul>
        
        
        </>
    )
}