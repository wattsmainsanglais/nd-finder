

import figwort from '../../../public/images/figwort.jpg'
import lucerne from '../../../public/images/lucerne.jpg'
import bugloss from '../../../public/images/bugloss.jpg'
import { StaticImageData } from 'next/image'


export type imageArray ={
    name: string, 
    src: StaticImageData, 
    alt: string, 
    isClicked: boolean, 
    style: {maxWidth: string, height: string }, 
    question: string, 
    answerlist: string[], 
    answer: string

}


let images: imageArray[] = [
        {
        name: 'figwort',
        src: figwort,
        alt: 'Picture of a figwort',
        isClicked: false,
        style: {
            maxWidth: '20%',
            height: 'auto',
            },
        question: 'What Color are the petals?',
        answerlist: ['Red', 'Green', 'Blue'],
        answer: 'Red'    
        },
        {
        name: 'lucerne',
        src: lucerne,
        alt: 'Picture of a lucerne',
        isClicked: false,
        style: {
            maxWidth: '20%',
            height: 'auto'
            },
        question: 'What Color is the stamen?',
        answerlist: ['Orange', 'Black', 'Green'],
      
        answer: 'Black'        
        }  
        ,
        {
           name: 'bugloss',
            src: bugloss,
            alt: 'Picture of a Vipers bugloss',
            isClicked: false,
            style: {
                maxWidth: '20%',
                height: 'auto'
                }, 
            question: 'Is the Stem?', 
            answerlist: ['Hairy', 'Ridged', 'Square'],
            answer: 'Square'          
        }   


]

export default images



