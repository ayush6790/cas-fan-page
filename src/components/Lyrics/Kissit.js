import React from "react";
import Cry from "../albumArt/Cry-min.jpg";

export default function Kissit() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={Cry} alt="Cry" />
        </div>
        <div className="right-div">
          <h3>Kiss It Of Me</h3>
          <p>
            Saw you on the side of the road <br />
            I could see you were walking slow, drinking a Slurpee <br />
            In a peach baseball cap, falling in my lap <br />
            You were so thirsty <br />
          </p>
          <p>
            Could you love me instead of all the boyfriends you get? <br />
            Know I’d make you forget about all of those rich fuckboys <br />
          </p>
          <p>
            Kiss it off me, <br />
            If you’re gonna break my heart this is a good start <br />
            Kiss it off me <br />
          </p>
          <p>
            You always bite your lip when you’re feeling it, as we move <br />{" "}
            slowly <br />
            & your peach baseball cap is tossed under the rack of clothes <br />
            & your jewelry <br />
          </p>

          <p>
            & you beg for it in the morning again before you go to the <br />{" "}
            gym <br />
            Said it’s a bad habit you just can’t quit…
          </p>
        </div>
      </div>
    </div>
  );
}
