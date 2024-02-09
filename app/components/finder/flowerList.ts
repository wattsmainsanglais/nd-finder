

import toadflax from '../../../public/images/toadflax.jpg'
import lucerne from '../../../public/images/lucerne.jpg'
import bugloss from '../../../public/images/bugloss.jpg'
import { StaticImageData } from 'next/image'


export type imageArray ={
    name: string, 
    nameSci: string,
    src: StaticImageData, 
    alt: string, 
    isClicked: boolean, 
    style: {maxWidth: string, height: string }, 
    question: string, 
    answerlist: string[], 
    answer: string,
    info?: string

}


let images: imageArray[] = [
        {
        name: 'Toadflax',
        nameSci: 'Linaria vulgaris',
        src: toadflax,
        alt: 'Picture of a toadflax',
        isClicked: false,
        style: {
            maxWidth: '20%',
            height: 'auto',
            },
        question: 'The Flower has a long yellow spur at the back, do you know what this is called?',
        answerlist: ['Calyx', 'Corolla', 'Horn'],
        answer: 'Corolla',
        info: 'The Corolla is "closed" meaning only very strong insects like bumblebees are strong enough to open it and access the pollen'    
        },
        {
        name: 'Lucerne',
        nameSci: 'Medicago Sativa',
        src: lucerne,
        alt: 'Picture of a lucerne',
        isClicked: false,
        style: {
            maxWidth: '20%',
            height: 'auto'
            },
        question: 'Look at the flowers very closely, what can you see?',
        answerlist: ['Small holes', 'Dark Spots', 'Dark Lines'],
      
        answer: 'Dark Lines'        
        }  
        ,
        {
           name: "Viper's Bugloss",
           nameSci: 'Echium Vulgare',
            src: bugloss,
            alt: 'Picture of a Vipers bugloss',
            isClicked: false,
            style: {
                maxWidth: '20%',
                height: 'auto'
                }, 
            question: 'Look closely at the Spotty stem, what color are the spots?', 
            answerlist: ['Red', 'Black', 'Purple'],
            answer: 'Purple'          
        }   


]

export default images



