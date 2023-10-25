import Image from 'next/image'
import styles from './css/styles.module.css'

import figwort from '../public/images/lucerne.jpg'

export default function Home() {
  return (
    <>
    <h2>Nature Dopes</h2>

      <section className={styles.flowerhunt}>
        <article className={styles.finders}>
          <Image 
            src={figwort}
            alt ='figwort picture'
            style={{
              maxWidth: '20%',
              height: 'auto',
            }
            }
          
          />
          <p>lets find some things</p>
        </article>
        <article className={styles.found}>
          <p>I've found some things</p>
        </article>
      </section>


    </>
  )
}
