

import figwort from '../../public/images/figwort.jpg'
import lucerne from '../../public/images/lucerne.jpg'
import bugloss from '../../public/images/bugloss.jpg'



let images: {name: string, src: any, alt: string, style: {maxWidth: string, height: string } }[] = [
        {
        name: 'figwort',
        src: figwort,
        alt: 'Picture of a figwort',
        style: {
            maxWidth: '20%',
            height: 'auto',
            }
        },
        {
        name: 'lucerne',
        src: lucerne,
        alt: 'Picture of a lucerne',
        style: {
            maxWidth: '20%',
            height: 'auto'
            },
        }  
        ,
        {
           name: 'bugloss',
            src: bugloss,
            alt: 'Picture of a Vipers bugloss',
            style: {
                maxWidth: '20%',
                height: 'auto'
                }, 
        }   


]

export default images



