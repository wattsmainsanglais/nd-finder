

import styles from './layout.module.css'
import React, { JSXElementConstructor } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ndLogo from '../public/images/logomini.png'
import { Indie_Flower } from 'next/font/google'


import { Fade } from 'react-awesome-reveal'

export const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie'
})




export default function Page() {
   
return(
<main className={styles.rootPageWrapper}> 

    <section className={`${indie.className} ${styles.logoWrapper} `}>
            <aside >
              <Image
                src={ndLogo}
                alt='Nature Dopes Logo, mini'
                style={{  
                  maxWidth: '100%',
                  height: 'auto'
                }} />
              
            </aside>
            <h2>Nature Dopes</h2>
    </section>

    <section className={` ${styles.rootPageSection} ${indie.className}`}>
        <h1> Welcome to the Nature Dopes mini-game 'Flower & Seek'</h1>
        <h2> <br /> While you're out in Nature, see if you can find each flower then answer a question for each</h2>
        <h3> <br /> Click the Go button to begin </h3>
        <Link href="/components/finder">Go!</Link>
          
      
    
    </section>
   
        
</main>
 
 
)

  //change to objects to align with Typescript (oop)
}
