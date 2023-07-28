import React from "react";
import cas from "../albumArt/Cigarettes+After+Sex.jpg";

export default function Flash() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={cas} alt="Flash" />
        </div>
        <div className="right-div">
          <h3>Flash</h3>
          <p>
            I’m a flash <br />
            You were blinded by the love I had <br />
            I’m a flash <br />
            The light could only get in through the cracks <br />
          </p>
          <p>
            & you’ve gotta do the right thing <br />
            Do the right thing baby <br />
            You’re the white swan in my photograph <br />
          </p>
          <p>
            When they crashed the helicopters in my heart it ripped <br />
            Cut in half, you saw me lying there bleeding to death <br />
          </p>
          <p>
            & you had to do the right thing Do the right thing baby You’re the
            white swan in my photograph
          </p>
          <p>
            Now I stand on the stage <br />
            I forget my lines to your play, “Satan’s Imagination” <br />
            & a voice in my head’s causing suicide searching for any way <br />{" "}
            to remember them <br />
          </p>
          <p>
            Do the right thing <br />
            Do the right thing baby <br />
            You’re the white swan in my photograph <br />
          </p>
        </div>
      </div>
    </div>
  );
}
