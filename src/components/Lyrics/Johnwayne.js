import React from "react";
import cas from "../albumArt/Cigarettes+After+Sex.jpg";

export default function Johnwayne() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={cas} alt="John Wayne" />
        </div>
        <div className="right-div">
          <h3>John Wayne</h3>
          <p>
            He’s got so much love for her, <br />
            But he doesn’t know what to do <br />
            Sitting in the car waiting outside her school <br />
            He’s in for a heartbreak if it’s all been blind faith from my <br />{" "}
            point of view <br />
          </p>
          <p>
            Baby, he’s got to be crazy <br />
            Living like he’s John Wayne <br />
            Always facing the world or chasing the girl <br />
            Baby, he’s got to be crazy <br />
          </p>
          <p>
            He’s got so much in his heart, <br />
            But he doesn’t know what to do <br />
            All he wants is her lying inside his room <br />
            He’s always feeling cheated telling all his secrets that I <br />{" "}
            couldn’t keep <br />
          </p>
          <p>
            Baby, he’s got to be crazy <br />
            Living like he’s John Wayne <br />
            Always facing the world or chasing the girl <br />
            Baby, he’s got to be crazy <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
