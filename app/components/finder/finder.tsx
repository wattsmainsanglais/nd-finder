'use client'
import Image from 'next/image'
import styles from '../../css/styles.module.css'
import finderStyles from './finder.module.css'
import React, { JSXElementConstructor } from 'react'

import images from './flowerList'
import Question from './questions/question'


export default function Finder(){

const congratulations = <p>Congratulations</p>;

const [flowerPics, setflowerPics] = React.useState(images)
const [foundPics, setFoundPics] = React.useState([])
const [clicked, setClicked] = React.useState([])

// Simple display states 
const [showMeQuestion, setShowMeQuestion] = React.useState(false);
const [showMeFlowers, setShowMeFlowers] = React.useState(true);
 
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
  
  const list = [...flowerPics];
  list.splice(index, 1);
  setflowerPics(list)
  
 
  
}


const handlesetFoundPics = (item, array) => {
  
  if(clicked[0].answer == item){
    setFoundPics([...foundPics, array]);
    
    setClicked([])
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
}



  return (
    <>
    <h2>Nature Dopes</h2>

      <section className={styles.flowerhunt}>
        <article className={styles.finders} style={{display: showMeFlowers? "block":"none"}} >
          {flowerPics.map((item: any, index: number) => (
           <section>
            <aside key={index} onClick={() => onClickRemove(item, index)}>
              <Image 
                src={item.src}
                alt={item.alt}
                style={{
                  maxWidth: '20%',
                  height: 'auto',
                }}/>  

                
                
                
            </aside>
            
          </section> 
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
          
      </section>
    </>
  )
}