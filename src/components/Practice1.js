import React from 'react'
import { useState } from 'react'

export default function Practice1() {
    const [place, setPlace] = useState("");
    const myStyle ={
        color:"red",
        backgroundColor:"black",
        margin:"auto",
        display:"flex",
        justifyContent:"center",
        flexFlow:"row wrap",
        width:"300px",
        borderRadius:"20px",
        border:"solid white"
    };
  return (
    <>
    <h1>I would like to visit {place}.</h1>
    <button type='button' style={myStyle} onClick={()=>setPlace('Mountains')}> option1 </button>
    <button type='button' style={myStyle} onClick={()=>setPlace('Beaches')}> option2 </button>
    <button type='button' style={myStyle} onClick={()=>setPlace('City')}> option3 </button>
    </>
  )
}
