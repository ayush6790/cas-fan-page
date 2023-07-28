import React from "react";
import cas from "../albumArt/Cigarettes+After+Sex.jpg";

export default function Sunsetz() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={cas} alt="Sunsetz" />
        </div>
        <div className="right-div">
          <h3>Sunsetz</h3>
          <p>
            Sunsets <br />
            We wander through a foreign town <br />
            Strangely there’s nobody else around <br />
            So you open your dress & show me your tits <br />
            On the swing set at the old playground <br />
          </p>
          <p>
            & when you go away I still see you <br />
            With sunlight on your face in my rear-view <br />
          </p>
          <p>
            Sunsets <br />
            I wanna hear your voice <br />
            A love that nobody could destroy <br />
            Took photographs like Brautigan’s book covers that we both adored…{" "}
            <br />
          </p>
          <p>
            This always happens to me this way <br />
            Recurring visions of such sweet days <br />
          </p>
          <p>
            When you go away I still see you <br />
            With sunlight on your face in my rear-view <br />
          </p>
        </div>
      </div>
    </div>
  );
}
