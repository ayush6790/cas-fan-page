import React from "react";
import ep from "../albumArt/EP+I.jpeg";

export default function Nothingsgonna() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={ep} alt="Nothings gonna hurt you " />
        </div>
        <div className="right-div">
          <h3>NOTHING'S GONNA HURT YOU BABY</h3>
          <p>
            Whispered something in your ear <br />
            It was a perverted thing to say <br />
            But I said it anyway <br />
            Made you smile & look away <br />
          </p>
          <p>
            Nothing's gonna hurt you baby <br />
            As long as you're with me you'll be just fine <br />
            Nothing's gonna hurt you baby <br />
            Nothing's gonna take you from my side <br />
          </p>
          <p>
            When we dance in my living room <br />
            To that silly '90s R&B <br />
            When we have a drink or three <br />
            Always ends in a hazy shower scene <br />
          </p>

          <p>
            When we're laughing in the microphone & singing <br />
            With our sunglasses on to our favorite songs <br />
          </p>
        </div>
      </div>
    </div>
  );
}
