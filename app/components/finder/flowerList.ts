

import figwort from '../../../public/images/figwort.jpg'
import lucerne from '../../../public/images/lucerne.jpg'
import bugloss from '../../../public/images/bugloss.jpg'



let images: {name: string, src: any, alt: string, isClicked: boolean, style: {maxWidth: string, height: string }, question: string, one: string, two: string, three: string }[] = [
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
        
        one: 'Red',
        two: 'Blue',
        three: 'Green'

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
        one: 'Orange',
        two: 'Black',
        three: 'Green'
                 
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
            one: 'Hairy',
            two: 'Ridged',
            three: 'Square',
                         
        }   


]

export default images



