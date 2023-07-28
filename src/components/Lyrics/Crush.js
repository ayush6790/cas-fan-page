import React from "react";
import crush from "../albumArt/Crush.jpg";

export default function Crush() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={crush} alt="Crush" />
        </div>
        <div className="right-div">
          <h3>Crush</h3>
          <p>
            I wanna line my walls with photographs you sent <br />
            Of you lying in your swimsuit on the bed <br />
            Can’t live without your love inside me now <br />
            I’ll find a way to slip into your skin somehow <br />
          </p>
          <p>
            I wanna fuck your love slow <br />
            Catch my heart, go swim <br />
            Feel your lips crush <br />
            Hold you here my loveliest friend <br />
          </p>
          <p>
            I love to watch you when you’re trying on your clothes <br />
            & now you’re all I think about when I’m alone <br />
            Can’t wait to feel your love inside me now <br />
            We’ll have a drink or two & we’ll go to your house... <br />
          </p>
        </div>
      </div>
    </div>
  );
}
