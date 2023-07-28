import React from "react";
import Cry from  "../albumArt/Cry-min.jpg";

export default function Dontletme() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={Cry} alt="Cry" />
        </div>
        <div className="right-div">
          <h3>Dont Let Me Go</h3>
          <p>
            When I was young I thought the world of you <br />
            You were all that I wanted then <br />
            It faded & I never saw you again, <br />
            But I won’t forget the love we had <br />
          </p>
          <p>
            Come to me now, <br />
            Don’t let me go <br />
            Stay by my side <br />
          </p>
          <p>
            Don’t let me go <br />
            Stay with me still <br />
            I’ve missed you so <br />
          </p>
          <p>
            When I was young I thought the world of you <br />
            I was dumb to let you drift away <br />
            & though I guess it had to come to an end <br />
            No one else could have the love we shared… <br />{" "}
          </p>

          <p>& my heart goes out to you wherever you are…</p>
          
        </div>
      </div>
    </div>
  );
}
