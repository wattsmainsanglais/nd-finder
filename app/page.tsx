

import styles from './css/styles.module.css'
import React, { JSXElementConstructor } from 'react'
import Link from 'next/link'
import Intro from './components/finder/page'

import PgData from './components/dataNdDatabase'



export default function Page() {


return(
<>
    <section>
        <h1> Welcome to the Nature Dopes mini-game 'Flower & Seek'</h1>
        <h2> While you're out in Nature, see if you can find each flower then answer a question for each</h2>
        <h3>Click the Go button to begin </h3>
        <Link href="/components/finder">Go!</Link>
    
    </section>
   
        
  </>
 
 
)

  //change to objects to align with Typescript (oop)
}
