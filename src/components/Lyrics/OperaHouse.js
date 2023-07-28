import React from "react";
import cas from "../albumArt/Cigarettes+After+Sex.jpg";

export default function OperaHouse() {
  return (
    <div className="lyricsDiv">
      <div className="containerLyricsPage">
        <div className="left-div">
          <img src={cas} alt="OperaHouse" />
        </div>
        <div className="right-div">
          <h3>Opera House</h3>
          <p>
            Built an opera house for you in the deepest jungle <br />
            & I walked across its stage singing with my eyes closed <br />
          </p>
          <p>
            I’ve got a love for you I just can’t escape <br />
            All of my love for you cuts me like barbed wire <br />
          </p>
          <p>
            I was meant to love you & always keep you in my life <br />
            I was meant to love you, <br />
            I knew I loved you at first sight <br />
          </p>
          <p>
            If I abandoned love I’d be a man without dreams <br />
            I’d rather be out there staring death right between its eyes now{" "}
            <br />
          </p>
          <p>
            & I can still hear the sound of you crying through the night <br />
            There in the opera house with no one else for miles <br />
          </p>
          <p>
            I was meant to love you & always keep you in my life <br />
            I was meant to love you <br />
            I knew I loved you at first sight <br />
          </p>
        </div>
      </div>
    </div>
  );
}
