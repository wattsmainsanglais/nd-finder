'use client'

import React from "react";
import {motion} from 'framer-motion'
import Link from "next/link";


export default function GoButton(){
   
   return(
    
      <motion.button
        className='goButton'
        style={{backgroundColor: '#5B9240', width: '100%', borderRadius: '2px'}}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
          backgroundColor: '#99d37d'
        }}
        whileTap={{ 
          scale: 0.9,
          backgroundColor: '#ffffff',
          color: '#5B9240'
         }}>Go!

        

      </motion.button>
    
)}