import React from "react";
import cas from "../albumArt/Cigarettes+After+Sex.jpg";

export default function Apocalypse() {
  return (
    <div className="lyricsDiv">
      <div style={{display:'flex',height:'100%'}}  className="containerLyricsPage">
        <div className="left-div">
          <img src={cas} alt="Apocalypse" />
        </div>
        <div className="right-div">
          <h3>Apocalypse</h3>
          <p>
            You leapt from crumbling bridges watching cityscapes turn to <br />{" "}
            dust <br />
            Filming helicopters crashing in the ocean from way above <br />
          </p>
          <p>
            Got the music in you baby, <br />
            Tell me why <br />
            Got the music in you baby, <br />
            Tell me why <br />
            You’ve been locked in here forever & you just can’t say <br />{" "}
            goodbye <br />
          </p>
          <p>
            Kisses on the foreheads of the lovers wrapped in your arms <br />
            You’ve been hiding them in hollowed out pianos left in the <br />{" "}
            dark… <br />
          </p>
          
          <p>
            Your lips, <br />
            My lips, <br />
            Apocalypse <br />
          </p>
          <p>
            Go & sneak us through the rivers, <br />
            Flood is rising up on your knees <br />
            Oh please… <br />
            Come out & haunt me <br />
            I know you want me <br />
            Come out & haunt me <br />
          </p>

          <p>
            Sharing all your secrets with each other since you were kids <br />
            Sleeping soundly with the locket that she gave you clutched in{" "}
            <br /> your fist… <br />
          </p>
          <p>
            When you’re all alone <br />
            I will reach for you <br />
            When you’re feeling low <br />
            I will be there too <br />
          </p>
        </div>
      </div>
    </div>
  );
}
