

import styles from './layout.module.css'
import React, { JSXElementConstructor } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ndLogo from '../public/images/logomini.png'
import { Indie_Flower } from 'next/font/google'
import GoButton from './components/buttons/GoButton'


export const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  
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
        <h1> Welcome to the Nature Dopes mini-game <span style={{color: '#5B9240', fontWeight: '800'}}>'Flower finder'</span></h1>
        <h2> <br /> While out in Nature, see if you can find each flower then answer a question for each</h2>
        <h3> <br /> Click Go to begin </h3>
        <Link className={styles.finderLink} href="../components/finder">
          <GoButton text='Go!' />
        </Link>
          
          
      
    
    </section>
   
        
</main>
 
 
)

  //change to objects to align with Typescript (oop)
}
