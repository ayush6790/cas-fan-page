import React from "react";
import ep from "../albumArt/EP+I.jpeg";

export default function Starryeyes() {
  return (
    <div className="lyricsDiv">
      <div style={{display:'flex',height:'100%'}} className="containerLyricsPage">
        <div className="left-div">
          <img src={ep} alt="Starry eyes" />
        </div>
        <div className="right-div">
          <h3 style={{lineHeight:'40px'}}>
            STARRY EYES <br />
            (FOR ESME)
          </h3>
          <p>
            Starry eyes <br />
            How can I get to you my true little <br />
            Starry eyes <br />
            What can I say or do for you my little <br />
            Starry eyes <br />
            Starry eyes forever shall be mine <br />
          </p>
          <p>
            Starry eyes <br />
            What can I say to make you listen <br />
            Starry eyes <br />
            What can I do for your attention <br />
            Starry eyes <br />
            Starry eyes forever shall be mine <br />
          </p>
          <p>
            When I'm alone I hear & feel you <br />
            Wish that I could reach right out & touch you <br />
            But knowing you're the one to greet me & meet me <br />
            Two alone in the dark may it be <br />
          </p>
          <p>
            Starry eyes <br />
            The sparks will fall on me <br />
            Starry eyes <br />
            Won't you listen that I'm here being <br />
            For you starry eyes <br />
            Starry eyes forever shall be mine <br />
          </p>
          <p>
            *written by Roky Erickson <br />
          </p>
        </div>
      </div>
    </div>
  );
}
