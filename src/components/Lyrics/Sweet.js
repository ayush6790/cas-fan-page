import React from "react";
import cas from "../albumArt/Cigarettes+After+Sex.jpg";

export default function Sweet() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={cas} alt="Sweet" />
        </div>
        <div className="right-div">
          <h3>Sweet</h3>
          <p>
            Watching the video that you sent me <br />
            The one where you’re showering with wet hair dripping <br />
            You know that I’m obsessed with your body, <br />
            But it’s the way you smile that does it for me <br />
          </p>
          <p>
            It’s so sweet knowing that you love me <br />
            Though we don’t need to say it to each other, <br />
            Sweet knowing that I love you & running my fingers through <br />{" "}
            your hair It’s so sweet <br />
          </p>
          <p>
            Watching the video where you’re lying in your red lingerie ten{" "}
            <br /> times nightly <br />
            You know I think your skin’s the perfect color, <br />
            But it’s always your eyes that pull me under <br />
          </p>
          <p>
            & I would gladly break it <br />
            I would gladly break my heart for you… <br />
          </p>
        </div>
      </div>
    </div>
  );
}
