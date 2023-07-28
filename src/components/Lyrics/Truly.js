import React from "react";
import cas from "../albumArt/Cigarettes+After+Sex.jpg";

export default function Truly() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={cas} alt="Truly" />
        </div>
        <div className="right-div">
          <h3>Truly</h3>
          <p>
            Sitting out smoking in the garden of the apartment <br />
            I reached in to grab your hand & kissed it when you weren’t <br />{" "}
            looking <br />
          </p>
          <p>
            You’re on the sheets like it’s a dirty magazine <br />
            & I like the way you say exactly what you mean <br />
          </p>
          <p>
            Truly, <br />
            Know that you really don’t need to be in love to make love to <br />{" "}
            me
          </p>
          <p>
            Said you wear a new perfume for each city that you visit <br />
            So you can always remember how it felt to be there <br />
            <br />
          </p>
          <p>
            & your lips were red in all the pictures that you sent <br />
            Wearing white or black, <br />
            All leading up to when we met… <br />
          </p>
        </div>
      </div>
    </div>
  );
}
