import React from "react";
import neon from "../albumArt/Neon+Moon.jpeg";

export default function Neonmoon() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={neon} alt="Neon" />
        </div>
        <div className="right-div">
          <h3>Neon</h3>
          <p>
            When the sun goes down on my side of town <br />
            That lonesome feeling comes to my door & the whole world <br />
            turns blue <br />
            <br />
            I spend most every night beneath the light of a neon moon <br />
          </p>
          <p>
            There’s a rundown bar across the railroad tracks <br />
            Got a table for two way in the back <br />
            Where I sit alone & think of you <br />
          </p>
          <p>
            If you lose your one & only <br />
            There’s always room here for the lonely <br />
            To watch your broken dreams <br />
            Dance in & out of the beams of a neon moon <br />
            <p>
              I think of two young lovers running wild & free <br />
              Close my eyes & sometimes see you <br />
              In the shadows of this smoke-filled room <br />
              No telling how many tears I’ve sat here & cried <br />
              Or how many lies that I’ve lied <br />
              Telling my poor heart you’ll come back one day... <br />
            </p>
            <p>
              But I’ll be alright as long as there’s light from a neon moon...
              <br />
            </p>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
