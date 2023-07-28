import React from "react";
import cry from "../albumArt/Cry-min.jpg";

export default function Touch() {
  return (
    <div className="lyricsDiv">
      <div style={{display:'flex',height:'100%'}} className="containerLyricsPage">
        <div className="left-div">
          <img src={cry} alt="TOUCH" />
        </div>
        <div className="right-div">
          <h3>TOUCH</h3>
          <p>
            I missed you & I cried, but I said that I was alright <br />
            & I know it’s been awhile since I needed a distraction <br /> <br />
            Because I want to do everything that you want me to <br />
            To tell you the truth <br /> <br />
            I need to stay alive, so sad that I could die <br />
          </p>
          <p>
            It’s leading me on, every time we touch <br />
            Leading me on, every time it hurts <br />
            Feeling so lonely because it’s not enough <br />
            Missing you only ever since we fell in love <br />
          </p>
          <p>
            & I watched you do a line that you spread out on the table <br />
            I don’t need to see you wired, I just want to see you upside down{" "}
            <br />
          </p>
          <p>
            I want to do everything that you want me to <br />
            To tell you the truth <br /> <br />
            I listened to you cry all night through the telephone… <br />
          </p>

          <p>
            Couldn’t say you didn’t want me then when we were lying in <br />
            my bed that night <br />
            You were acting like a different person as if suddenly you <br />
            wanted to just be friends <br />
            I was hurt & so I took a shower so you couldn’t hear me, <br />
            knowing I had to cry <br />
            Sad to know that while my heart was breaking you were <br />
            sleeping or just faking… <br />
          </p>
        </div>
      </div>
    </div>
  );
}
