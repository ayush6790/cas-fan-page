import React from "react";
import cry from "../albumArt/Cry-min.jpg";

export default function Cry() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={cry} alt="Cry" />
        </div>
        <div className="right-div">
          <h3>Cry</h3>
          <p>
            It’s making you cry every time you give your love to me this <br />{" "}
            way <br />
          </p>
          <p>
            Saying you’d wait for me to stay, I know it hurts you, <br />
            But I need to tell you something <br />
            My heart just can’t be faithful for long <br />
            I swear I’ll only make you cry <br />
          </p>
          <p>
            Maybe I’d change for you someday, but I can’t help the way I <br />{" "}
            feel <br />
            Wish I was good, wish that I could give you my love now…
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
