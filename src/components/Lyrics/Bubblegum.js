import React from 'react'
import Bubblegumimg from "../albumArt/Bubblegum.jpg";


export default function Bubblegum() {
  return (
    <div className='lyricsDiv'>
    <div className="containerLyricsPage">
      <div className="left-div">
        <img src={Bubblegumimg} alt="Bubblegum" />
      </div>
      <div className="right-div">
        <h3>Bubblegum</h3> 
        <p> Licking the barrel of a gun, <br />
            Chewing it like it’s bubblegum <br />
            Wave it like a magic wand, <br />
            Pop a few rounds off just for fun <br />    
          </p>
          <p>
          Go to the strip club all alone, thinking that I could take you home <br />
           To picture you with those other guys is driving me crazy  <br />all the time
          </p>
          <p>
            Well, I never wanted to be with you, <br />
            But I think I’m falling so what can I do? <br />
            You’ll just lead me on until I’m drowning in tears
          </p>
          <p>
          & you’re holding me as if I was the last man standing on <br />
          earth…

          </p>
          
      </div>
    </div>
    </div>
  )

}

