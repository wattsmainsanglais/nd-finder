

import React, { JSXElementConstructor } from 'react'

import images, {imageArray} from '../flowerList'
import styles from './question.module.css'
import { indie } from '../layout';

export interface UserProps {
    handlesetFoundPics: Function,
    isactive: imageArray,
    question: string,
 
    
  }


export default function Question({handlesetFoundPics ,isactive, question, }: UserProps){

   


    let answerArray:string[] = isactive.answerlist;

    return(
        <section className={`${styles.questionWrapper} ${indie.className}`}>
            <h2>{question}</h2>
            
            <ul className={styles.answersList}>
                {answerArray.map( (answer, index) => (
                    <li className={styles.answerEntry} key={index} onClick={() => handlesetFoundPics(answer, isactive)}>{answer}</li>
                ))
                
                }
            </ul>
        </section>
        
        
    )
}




