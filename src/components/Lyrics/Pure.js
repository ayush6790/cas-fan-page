import React from "react";
import cry from "../albumArt/Cry-min.jpg";

export default function Pure() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={cry} alt="Pure" />
        </div>
        <div className="right-div">
          <h3>Pure</h3>
          <p>
            When you walk in the room in a white bodysuit <br />
            & I say, “take it off” so you tell me to watch <br />
          </p>
          <p>
            & the Tv is on when we make love <br />
            Because we get carried away <br />
            We don’t care anyway… <br />
          </p>
          <p>
            Wrapped your hair in a towel, but I watch you let it down <br />
            & it’s all soaking wet as you take me in your mouth <br />
            <p>
              & we stare at the street from the back balcony, <br />
              But now all I can see is you undressing for me… <br />
            </p>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
