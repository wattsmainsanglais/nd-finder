

import styles from './css/styles.module.css'
import React, { JSXElementConstructor } from 'react'
import Finder from './components/finder/finder'


import PgData from './components/dataNdDatabase'


export default function Home() {

return(
<>
  <Finder />
  <PgData />
</>


)

  //change to objects to align with Typescript (oop)
}
