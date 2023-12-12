'use client'

import React from "react";
import Finder from "../finder/finder";

export default function Intro(){

    const[go, setGo] = React.useState<boolean>(true)

    const toggleSetGo = () =>{
        setGo(!go)
    }

return (
   
   <>
    <section style={{display: go? 'block': 'none' }}>
        <h1> Welcome to the Nature Dopes mini-game 'Flower & Seek'</h1>
        <h2> While you're out in Nature, see if you can find each flower then answer a question for each</h2>
        <h3>Click the Go button to begin </h3>
        <button onClick={toggleSetGo }>Go!</button>
    
    </section>
    <section style={{display: go? 'none': 'block' }}>
        <Finder/>
        <button onClick={toggleSetGo}>Start</button>
    </section>
        
    </>
)
}