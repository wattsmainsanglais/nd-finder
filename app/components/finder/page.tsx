'use client'
import Image from 'next/image'
import styles from '../../css/styles.module.css'
import finderStyles from './finder.module.css'
import React, { JSXElementConstructor } from 'react'

import images, { imageArray } from './flowerList'

import Question from './questions/question'
import Congratulations from './congratualtions/congratulations'
import Link from 'next/link'

import {AnimatePresence, motion, useInView} from 'framer-motion'

import { indie } from './layout'
import PgData from '../dataNdDatabase'

export default function Finder(){


const [flowerPics, setflowerPics] = React.useState(images)
const [foundPics, setFoundPics] = React.useState<imageArray[]>([])
const [clicked, setClicked] = React.useState<imageArray[]>([]) 

// Simple display states 
const [showMeQuestion, setShowMeQuestion] = React.useState<boolean>(false);
const [showMeFlowers, setShowMeFlowers] = React.useState<boolean>(true);

// Points State
const [pointsTotal, setPointsTotal] = React.useState<number>(0)
 


function toggleQuestionDiv(){
    setShowMeQuestion(!showMeQuestion);
  }

function toggleFindersArticle(){
  setShowMeFlowers(!showMeFlowers)
}

// click event

const onClickRemove = (item: any, index: number) => {
  toggleFindersArticle()
  toggleQuestionDiv();
  item.isClicked = true
  setClicked([...clicked, item])
  
  const list: imageArray[] = [...flowerPics];
  list.splice(index, 1);
  setflowerPics(list)
  
 
  
}


const handlesetFoundPics = (item: string, array: imageArray) => {
  
  if(clicked[0].answer == item){
    setFoundPics([...foundPics, array]);
    
    setClicked([])
    setPointsTotal(pointsTotal + 1)
    toggleQuestionDiv()
    toggleFindersArticle()
  } else {
    setFoundPics([...foundPics, array]);
    setClicked([]);
    toggleQuestionDiv();
    toggleFindersArticle();
    
    
    
  }

};

const cancelQuestionDiv = (array: imageArray) => {
  setClicked([]);
  setflowerPics([...flowerPics, array])
  toggleQuestionDiv();
  toggleFindersArticle();

}

const reset = () => {
  setFoundPics([])
  setflowerPics(images)
  setClicked([])
  setPointsTotal(0)
  setShowMeQuestion(false)
  setShowMeFlowers(true)
}

    // rememeber, maybe at end of game, add facts for questions answered incorrectly. would need new incorrect state
  return (    
    <>


      <section className={finderStyles.flowerhunt}>

        <article className={finderStyles.found}>
            <div className={finderStyles.foundWrapper} style={{opacity: foundPics.length > 0 ? 1:0 }}>
              <p className={`${finderStyles.foundP} ${indie.className}`}>Found... </p>
              {foundPics.map((item: any, index: number) => (
               
                <motion.aside key={index} className={finderStyles.foundAside}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{duration: .8}}>

                    <Image 
                      src={item.src}
                      alt={item.alt}
                      style={{
                        maxWidth: '30px',
                        maxHeight: '40px',
                        height: 'auto',
                      }}/>  
                </motion.aside>
                
              ) 
              )}
            </div>
          </article>



        <article  className={finderStyles.finders} /**/ >

          {flowerPics.map((item: any, index: number) => (

           <AnimatePresence key={index}>
            {showMeFlowers && (
           
            <motion.div className={finderStyles.flowerlistAside} style={{display: showMeFlowers? "block":"none"}} onClick={() => onClickRemove(item, index)}
              whileInView={{ x: 0}}
            
              
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: -200, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{duration: .5}}
              >
              <Image 
                src={item.src}
                alt={item.alt}
                className={finderStyles.flowerhuntImage}
                style={{
                  maxWidth: '90%',
                  height: 'auto',
                }}/>  

                <p style={{textAlign: 'center'}}>{item.name}</p>
                <p style={{textAlign: 'center', fontSize: '0.8em'}}>({item.nameSci})</p>
                
            </motion.div>
      
           
           )}
           </AnimatePresence>
          ))
          }


          <AnimatePresence>
            {showMeQuestion && (

            <motion.div className={finderStyles.questionModal} style={{display: showMeQuestion?"flex":"none", minHeight: '400px'}} 
              key='modal'
              initial={{ x: 800, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 800, opacity: .1 }}
              transition={{duration: .5 }}>
                
              {clicked.map((item: any, index: number) => {
                if(item.isClicked === true){
                
                  return (

                    
                    <aside className={finderStyles.questionAside} key={index}>

                      <Question cancelQuestionDiv={cancelQuestionDiv}  handlesetFoundPics={handlesetFoundPics} isactive={clicked[0]} question={item.question} />
                    </aside>
                     
                  )
                }
              })}

            </motion.div>
          )}
          </AnimatePresence>
          


         
          <p>lets find some things</p>
        </article>

        
          { flowerPics.length == 0 && clicked.length == 0 ? (
            <motion.div className={finderStyles.questionModal} style={{minHeight: '400px'}}
              initial={{x: -800}}
              animate={{x: 0}}
              exit={{x: -800}}
              transition={{duration: 0.5}}
              >
              <Congratulations points={pointsTotal} />
            </motion.div>
            
          ) :
          (
             <></>
          )
             
          }
        


      
      </section>
      <button onClick={reset}>reset</button>
      <Link href='/'>Start</Link>

      
     
    </>
  )
}