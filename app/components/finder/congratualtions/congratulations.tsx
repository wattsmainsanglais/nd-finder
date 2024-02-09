 /* eslint react/no-unescaped-entities */

import React from 'react'
import style from './congratulations.module.css'
import { Indie_Flower } from 'next/font/google'


const indie = Indie_Flower({
    weight: '400',
    subsets: ['latin'],
    
  })


export interface PointsProps {
    points: number
}

export default function Congratulations({points}: PointsProps ){

    return(
     <section className={`${style.congratulationsWrapper} ${indie.className}` }>

        <h1>Congratualtions!</h1>
        <h2>You've reached the end of the game</h2>
        <h3>Your final score is</h3>
        <p>{points} out of 3 </p>


     </section>
    )

}