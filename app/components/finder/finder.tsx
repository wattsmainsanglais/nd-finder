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

const [showMe, setShowMe] = React.useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

// click event

const onClickRemove = (item: any, index: number) => {

  toggle()
  const list = [...flowerPics];
  list.splice(index, 1);
  setflowerPics(list);
  setFoundPics([...foundPics, item])
  if(list.length === 0){
    setflowerPics([...list, congratulations])
  }
  
}

const reset = () => {
  setFoundPics([])
  setflowerPics(images)
}



  return (
    <>
    <h2>Nature Dopes</h2>

      <section className={styles.flowerhunt}>
        <article className={styles.finders}>
          {flowerPics.map((item: any, index: number) => (
           <section>
            <aside key={item} onClick={() => onClickRemove(item, index)}>
              <Image 
                src={item.src}
                alt={item.alt}
                style={{
                  maxWidth: '20%',
                  height: 'auto',
                }}/>  

                <div style={{display: showMe?"block":"none"}} >
                  <Question question={item.question} one={item.one} two={item.two} three={item.three} />
                </div>
                
                
            </aside>
            
          </section> 
          ))
          }
          <p>lets find some things</p>
        </article>
       
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