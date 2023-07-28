import React from "react";
import ep from "../albumArt/EP+I.jpeg";

export default function Iamfirefighter() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={ep} alt="I am firefighter" />
        </div>
        <div className="right-div">
          <h3>I'M A FIREFIGHTER</h3>
          <p>
            Baby I'm a firefighter trapped in a burning house in a silent <br />{" "}
            picture <br />
            & there is no way out except to watch the love between us die <br />
          </p>
          <p>
            That's called the Falling Angel <br />
            It's an amusement park ride <br />
            Some sort of rollercoaster <br />
            It takes you up & when it brings you down it gives you <br />{" "}
            butterflies <br />
          </p>
          <p>
            & now I'm longing for your kiss <br />
            Bet you could read it on my lips <br />
            <br />
            Waterfalls I'm jumping down <br />
          </p>

          <p>
            I know you're leaving baby <br />
            The birds are flying south <br />
            & there's nothing to say <br />
            I need you here <br />
            I need your love inside of mine like I could die <br />
          </p>
        </div>
      </div>
    </div>
  );
}
