'use client'
import Image from 'next/image'
import styles from '../../css/styles.module.css'
import finderStyles from './finder.module.css'
import React, { JSXElementConstructor } from 'react'

import images, { imageArray } from './flowerList'

import Question from './questions/question'
import Congratulations from './congratualtions/congratulations'


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
    
    return
  }

};

const reset = () => {
  setFoundPics([])
  setflowerPics(images)
  setClicked([])
  setPointsTotal(0)
  setShowMeQuestion(false)
  setShowMeFlowers(true)
}



  return (
    <>


      <section className={styles.flowerhunt}>
        <article className={styles.finders} style={{display: showMeFlowers? "block":"none"}} >
          {flowerPics.map((item: any, index: number) => (
           
            <aside className={finderStyles.flowerlistAside} key={index} onClick={() => onClickRemove(item, index)}>
              <Image 
                src={item.src}
                alt={item.alt}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}/>  

                
                
                
            </aside>
            
          
          ))
          }
          <p>lets find some things</p>
        </article>

        <div style={{display: showMeQuestion?"block":"none"}} >
              {clicked.map((item: any, index: number) => {
                if(item.isClicked === true){
                
                  return (
                    <aside key={index}>

                      <Question handlesetFoundPics={handlesetFoundPics} isactive={clicked[0]} question={item.question} />
                    </aside>
                     
                  )
                }
              })}

        </div>
       
        <article className={styles.found}>
          <p>I've found some things</p>
          {foundPics.map((item: any, index: number) => (
            <aside key={index}>
              <Image 
                src={item.src}
                alt={item.alt}
                style={{
                  maxWidth: '20%',
                  height: 'auto',
                }}/>  
            </aside>
          ) 
          )}
        </article>
       
      </section>
      <button onClick={reset}>reset</button>


      <section>
          { flowerPics.length == 0 && clicked.length == 0 ? (
            <Congratulations points={pointsTotal} />
           
            
          ) :
          (
             <></>
          )
             
          }
      </section>
    </>
  )
}