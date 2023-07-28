import React from "react";
import aff from "../albumArt/Affection.jpeg";

export default function Affection() {
  return (
    <div className="lyricsDiv">
      <div style={{display:'flex',height:'100%'}} className="containerLyricsPage">
        <div className="left-div">
          <img src={aff} alt="Affection" />
        </div>
        <div className="right-div">
          <h3>Affection</h3>
          <p>
            I know that you say I get mean when I'm drinking, <br />
            But then again sometimes I get really sweet <br />
            So what does it mean if I tell you to go fuck yourself <br />
            Or if I say that you're beautiful to me <br />
          </p>
          <p>
            It's affection always, <br />
            You're gonna see it someday <br />
            My attention for you <br />
            Even if it's not what you need <br />
          </p>
          <p>
            Sometimes we talk all night long, we don't shut up <br />
            & when it's late we'll say we're still wide awake so... <br />
            We love to talk about how you'll come up to visit me <br />
            & we'll rent a car & we'll drive upstate <br />
            <br />
          </p>
          <p>
            It's affection always, <br />
            You're gonna see it someday <br />
            My attention's on you <br />
            Even if it's not what you need <br />
          </p>
          <p>
            I think of you, <br />
            I want you too, <br />
            I'd fall for you <br />
          </p>
          <p>
            It's affection always... <br />
          </p>
        </div>
      </div>
    </div>
  );
}
