'use client'

import React from "react";
import {motion} from 'framer-motion'
import Link from "next/link";


export default function GoButton(){
   
   return(
    <motion.button
        className='goButton'
        style={{backgroundColor: '#5B9240', width: '5%', borderRadius: '2px'}}
        whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
        whileTap={{ scale: 0.9 }}>

        <Link href="../components/finder">Go!</Link>

    </motion.button>

)}