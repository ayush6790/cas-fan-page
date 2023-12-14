import React from "react";
import Pistol from "./albumArt/Pistol.jpg";
import Youre from "./albumArt/Youre+All+I+Want.jpg";
import Cry from "./albumArt/Cry-min.jpg";
import Falling from "./albumArt/Falling+In+Love.jpg";
import Heavenly from "./albumArt/Heavenly.jpg";
import Neon from "./albumArt/Neon+Moon.jpeg";
import Crush from "./albumArt/Crush.jpg";
import Cas from "./albumArt/Cigarettes+After+Sex.jpg";
import Affection from "./albumArt/Affection.jpeg";
import Ep1 from "./albumArt/EP+I.jpeg";
import Bubblegumimg from "./albumArt/Bubblegum.jpg";
import mpst from "./albumArt/Orphan_Language_FINAL.jpg";

import { Link, useNavigate } from "react-router-dom";

export default function Music() {
  const navigate = useNavigate();

  return (
    <>
      <div className="musicGrid">
        <div className="musicGrid0">
          <div id="music01">
            <img src={mpst} alt="mpst" srcset="" height={300} width={300} />
            <h4>
              MOTION PICTURE <br /> SOUNDTRACK{" "}
            </h4>
            <Link to="/music/MotionPictureSoundTrack">
              1.Motion Picture Soundtrack
            </Link>{" "}
            <br />
          </div>

          <div id="music0">
            <img
              src={Bubblegumimg}
              alt="Stop waiting"
              srcset=""
              height={300}
              width={300}
            />
            <h4>Stop Waiting</h4>
            <Link to="/music/bubblegum">1.Bubblegum</Link> <br />
            <Link to="/music/stopwaiting">2.Stop Waiting</Link>
          </div>
        </div>
        <div className="musicGrid1">
          <div id="music1">
            <img src={Pistol} alt="Pistol" srcset="" height={300} width={300} />
            <h4>Pistol</h4>
            <Link to="/music/pistol">1.Pistol</Link>
          </div>
          <div id="music2">
            <img
              src={Youre}
              alt="You are all i want"
              srcset=""
              height={300}
              width={300}
            />
            <h4>You're All I Want</h4>
            <Link to="/music/yourealliwant">1.You're All I Want</Link>
          </div>
        </div>
        <div className="musicGrid2">
          <div id="music3">
            <img src={Cry} alt="Cry" srcset="" height={300} width={300} />
            <h4>Cry</h4>
            <p>
              <Link to="/music/dontletme"> 1. Don’t Let Me Go</Link> <br />
              <Link to="/music/kissit"> 2. Kiss It Off Me</Link> <br />
              <Link to="/music/heavenly">3. Heavenly</Link> <br />
              <Link to="/music/youaretheonly">
                {" "}
                4. You’re the Only Good Thing in My Life
              </Link>{" "}
              <br />
              <Link to="/music/touch">5. Touch</Link> <br />
              <Link to="/music/hentai">6. Hentai</Link> <br />
              <Link to="/music/cry">7. Cry </Link> <br />
              <Link to="/music/fallinginlove">8. Falling In Love </Link> <br />
              <Link to="/music/pure">9. Pure </Link> <br />
            </p>
          </div>
          <div id="music4">
            <img
              src={Falling}
              alt="Falling in love"
              srcset=""
              height={300}
              width={300}
            />
            <h4>Falling In Love</h4>
            <Link to="/music/fallinginlove">1. Falling In Love </Link> <br />
          </div>
        </div>
        <div className="musicGrid3">
          <div id="music5">
            <img
              src={Heavenly}
              alt="Heavenly"
              srcset=""
              height={300}
              width={300}
            />
            <h4>Heavenly</h4>
            <Link to="/music/heavenly">1. Heavenly</Link> <br />
          </div>
          <div id="music6">
            <img src={Neon} alt="Neonmoon" srcset="" height={300} width={300} />
            <h4>Neon Moon</h4>
            <Link to="/music/neonmoon">1. Neon Moon </Link> <br />
          </div>
        </div>
        <div className="musicGrid4">
          <div id="music7">
            <img src={Crush} alt="Crush" srcset="" height={300} width={300} />
            <h4>Crush</h4>
            <Link to="/music/crush">1. Crush </Link> <br />
            <Link to="/music/sesamesyrup">2. Sesame Syrup</Link> <br />
          </div>
          <div id="music8">
            <img
              src={Cas}
              alt="Cigarettes After Sex"
              srcset=""
              height={300}
              width={300}
            />
            <h4>Cigarettes After Sex</h4>
            <Link to="/music/k">1. K </Link> <br />
            <Link to="/music/eachtimeyoufallinlove">
              2. Each Time You Fall In Love{" "}
            </Link>{" "}
            <br />
            <Link to="/music/sunsetz">3. Sunsetz </Link> <br />
            <Link to="/music/apocalypse">4. Apocalypse </Link> <br />
            <Link to="/music/flash">5. Flast </Link> <br />
            <Link to="/music/sweet">6. Sweet </Link> <br />
            <Link to="/music/operahouse">7. Opera House </Link> <br />
            <Link to="/music/truly">8. Truly </Link> <br />
            <Link to="/music/johnwayne">9. John Wayne </Link> <br />
            <Link to="/music/younganddumb">10. Young & Dumb </Link> <br />
          </div>
        </div>
        <div className="musicGrid5">
          <div id="music9">
            <img
              src={Affection}
              alt="Affection"
              srcset=""
              height={300}
              width={300}
            />
            <h4>Affection</h4>
            <Link to="/music/affection">1. Affection </Link> <br />
            <Link to="/music/keeponlovingyou">2. Keep On Loving You </Link>{" "}
            <br />
          </div>
          <div id="music10">
            <img src={Ep1} alt="Ep.1" srcset="" height={300} width={300} />
            <h4>I.</h4>
            <Link to="/music/nothingsgonnahurtyoubaby">
              1. Nothing's Gonna Hurt You Baby
            </Link>{" "}
            <br />
            <Link to="/music/iamfirefighter">2. I'am Firefighter</Link> <br />
            <Link to="/music/dreamingofyou">3. Dreaming of You </Link> <br />
            <Link to="/music/starryeyes">4. Starry Eyes</Link> <br />
          </div>
        </div>
      </div>
    </>
  );
}
