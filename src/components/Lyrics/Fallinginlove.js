import React from "react";
import falling from "../albumArt/Falling+In+Love.jpg";

export default function Fallinginlove() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={falling} alt="Falling in love" />
        </div>
        <div className="right-div">
          <h3>Falling in Love</h3>
          <p>
            When I hold you close to me <br />
            I could always see a house by the ocean <br />
            & last night I could hear the waves <br />
            As I heard you say, “all that I want is to be yours” <br />
          </p>
          <p>
            Falling in love, <br />
            Falling in love <br />
            Deeper than I’ve felt it before with you, baby <br />
            I feel I’m falling in love with all my heart <br />
          </p>
          <p>
            Back when you were far away <br />
            We would go on dates to watch the same movie <br />
            & you were imagining sitting next to me <br />
            & holding my hand for the whole thing… <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
