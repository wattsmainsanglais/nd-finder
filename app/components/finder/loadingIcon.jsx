'use client'

import ndLogo from '../../../public/images/logomini.png'
import Image from 'next/image'
import styles from '../../layout.module.css'
import {motion} from 'framer-motion'



export default function LoadingIcon(){

    return(

        
    <motion.div className={styles.animateCont} 
        animate={{scale: 1.2}}
        transition={{
          duration: 1,
          repeat: Infinity }}
        >

          <Image
               src={ndLogo}
                alt='Nature Dopes Logo, mini'
                style={{  
                    maxWidth: '50%',
                    height: 'auto'
                }} />    

        </motion.div>


    )
}