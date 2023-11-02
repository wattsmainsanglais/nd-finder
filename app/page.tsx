'use client'
import Image from 'next/image'
import styles from './css/styles.module.css'
import React from 'react'

import figwort from '../public/images/figwort.jpg'
import lucerne from '../public/images/lucerne.jpg'

import images from './components/flowerList'



export default function Home() {



  //change to objects to align with Typescript (oop)

const congratulations = <p>Congratulations</p>;

const [flowerPics, setflowerPics] = React.useState(images)
const [foundPics, setFoundPics] = React.useState([])

// click event

const onClickRemove = (item: any, index: number) => {
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
            <aside key={item} onClick={() => onClickRemove(item, index)}>
              <Image 
                src={item.src}
                alt={item.alt}
                style={{
                  maxWidth: '20%',
                  height: 'auto',
                }}/>  
              
            </aside>

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

    </>
  )
}
