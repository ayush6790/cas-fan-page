import React from "react";
import ep from "../albumArt/EP+I.jpeg";

export default function Dreamingofyou() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={ep} alt="Dreaming of you" />
        </div>
        <div className="right-div">
          <h3>DREAMING OF YOU</h3>
          <p>
            Seen you from afar <br />
            Wondered who you are <br />
            Wondered what you're like <br />
            Think you're just my type <br />
            <br />
            & now I'm dreaming of you <br />
          </p>
          <p>
            Want you, yes I do <br />
            Bet you never knew it <br />
            Think you'd suit me fine <br />
            Want you all the time <br />
            <br />
            & now I'm dreaming of you <br />
          </p>
          <p>
            You're the one I'm calling on <br />
            You're the one who's calling me to have it <br />
          </p>
        </div>
      </div>
    </div>
  );
}
