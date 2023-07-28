import React from "react";
import cas from "../albumArt/Cigarettes+After+Sex.jpg";

export default function Eachtimeyoufallinlove() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={cas} alt="Each time you fall in love" />
        </div>
        <div className="right-div">
          <h3>EACH TIME YOU FALL IN LOVE</h3>
          <p>
            Each time you fall in love it’s clearly not enough <br />
            You sleep all day & drive out in L.A. <br />
            It isn’t safe <br />
          </p>
          <p>
            & each time you kiss a girl you never know what it’s worth <br />
            You say all of the words they wanna hear <br />
            It isn’t real <br />
          </p>
          <p>
            She took you for a ride in summer baby <br />
            Lost all your money to her <br />
            All I wanna know is if you love her how come you never give <br />{" "}
            in <br />
          </p>
          <p>
            Each time you have a dream you never know what it means <br />
            You see that open road & never know which way to go <br />
            <br />
            & each time you fall in love it’s clearly not enough <br />
            You sleep all day & drive out in L.A. <br />
            It isn’t safe… <br />
          </p>
        </div>
      </div>
    </div>
  );
}
