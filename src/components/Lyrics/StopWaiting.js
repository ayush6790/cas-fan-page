import React from 'react'
import Bubblegumimg from "../albumArt/Bubblegum.jpg";


export default function StopWaiting() {
  return (
    <div className='lyricsDiv'>
    <div className="containerLyricsPage">
      <div className="left-div">
        <img src={Bubblegumimg} alt="Bubblegum" />
      </div>
      <div className="right-div">
        <h3>Stop Waiting</h3>
        <p>In her favorite locket, hiding yellow pills <br />
            With white wine to chase them, lying on the hills <br /> 
            We kissed until we couldn’t breathe <br />
            The coldest sand is on the beach <br />
            </p>
          <p>
            Now she’s in her swimsuit with the yellow straps  <br />
            Cutting it with scissors until there’s nothing left <br />
            & rubbing sunscreen on her breasts, she’s putting on her <br /> sunglasses <br />
          </p>
          <p>
            I could win, <br /> 
            I could lose, <br />
            But that’s a look I can’t refuse <br /> 
          </p>
          <p>
          Stop waiting… <br />
          </p>
          
      </div>
    </div>
    </div>
  )
}
