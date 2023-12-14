import ndLogo from '../public/images/logomini.png'
import Image from 'next/image'
import styles from './layout.module.css'

export default function Loading(){
      return( 
        <section className={styles.loadingWrapper}>

          <Image
            src={ndLogo}
            alt='Nature Dopes Logo, mini'
            style={{  
            maxWidth: '50%',
            height: 'auto'
                }} />
        </section>
      )
}