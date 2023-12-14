import React from "react";
import mpst from "../albumArt/Orphan_Language_FINAL.jpg";

export default function MotionPictureSoundTrack() {
  return (
    <div className="lyricsDiv">
      <div style={{ display: "flex" }} className="containerLyricsPage">
        <div className="left-div">
          <img src={mpst} alt="Affection" />
        </div>
        <div className="right-div">
          <h3>Motion Picture SoundTrack</h3>
          <p>
            White wine & sleeping pills help me get back to your arms <br />
            Cheap sex & sad films help me get where I belong <br />
          </p>
          <p>
            I think you’re crazy, baby <br />
            I think you're crazy, baby <br />
          </p>
          <p>
            Stop sending letters, letters always get burned <br />
            It’s not like the movies, they fed us on little white lies… <br />
          </p>
          <p>
            I will see you in the next life… <br />
          </p>
        </div>
      </div>
    </div>
  );
}
