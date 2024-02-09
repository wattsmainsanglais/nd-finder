'use client'

import React, { MouseEventHandler } from "react";
import {motion} from 'framer-motion'




export interface UserProps {
  text: string,
  reset?: MouseEventHandler
}


export default function GoButton({text, reset}: UserProps){
   
   return(
    
      <motion.button
        onClick={reset}
        className='goButton'
        style={{color: '#CDD1CD', backgroundColor: '#5B9240', borderRadius: '2px', padding: '5px'}}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
          backgroundColor: '#99d37d'
        }}
        whileTap={{ 
          scale: 0.9,
          backgroundColor: '#ffffff',
          color: '#5B9240'
         }}>{text}

        

      </motion.button>
    
)}