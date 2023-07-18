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

import { Link, useNavigate } from "react-router-dom";


export default function Music() {
    const navigate = useNavigate();

    return (
        <>
            <div className="musicGrid" >
                <div className="musicGrid0">
                <div id = "music01">
                    <img src={Bubblegumimg} alt="ds" srcset="" height={300} width={300} />
                        <h4>Bubblegum /</h4>
                        <Link to="/music/bubblegum">1.Bubblegum</Link> <br />
                    </div>
                    
                    <div id = "music0">
                    <img src={Bubblegumimg} alt="ds" srcset="" height={300} width={300} />
                        <h4>Stop Waiting</h4>
                        <Link to="/music/stopwaiting">1.Stop Waiting</Link>
                    </div>
                </div>
                <div className="musicGrid1">
                    <div id="music1">
                        <img src={Pistol} alt="ds" srcset="" height={300} width={300} />
                        <h4>Pistol</h4>
                        <Link to="/music/pistol">1.Pistol</Link>
                    </div>
                    <div id="music2">
                        <img src={Youre} alt="ds" srcset="" height={300} width={300} />
                        <h4>You're All I Want</h4>
                        <Link to='/music/yourealliwant'>1.You're All I Want</Link>
                    </div>
                </div>
                <div className="musicGrid2">
                    <div id="music3">
                        <img src={Cry} alt="ds" srcset="" height={300} width={300} />
                        <h4>Cry</h4>
                        <p>
                            1. Don’t Let Me Go <br />
                            2. Kiss It Off Me <br />
                            3. Heavenly <br />
                            4. You’re the Only Good Thing in My Life <br />
                            5. Touch <br />
                            6. Hentai <br />
                            7. Cry <br />
                            8. Falling In Love <br />
                            9. Pure
                        </p>
                    </div>
                    <div id="music4">
                        <img src={Falling} alt="ds" srcset="" height={300} width={300} />
                        <h4>Falling In Love</h4>
                        <p>
                            1. Falling In Love
                        </p></div>
                </div>
                <div className="musicGrid3">
                    <div id="music5">
                        <img src={Heavenly} alt="ds" srcset="" height={300} width={300} />
                        <h4>Heavenly</h4>
                        <p>
                            1. Heavenly
                        </p>
                    </div>
                    <div id="music6">
                        <img src={Neon} alt="ds" srcset="" height={300} width={300} />
                        <h4>Neon Moon</h4>
                        <p>
                            1. Neon Moon
                        </p>
                    </div>
                </div>
                <div className="musicGrid4">
                    <div id="music7">
                        <img src={Crush} alt="ds" srcset="" height={300} width={300} />
                        <h4>Crush</h4>
                        <p>
                            1. Crush <br />
                            2. Sesame Syrup
                        </p>
                    </div>
                    <div id="music8">
                        <img src={Cas} alt="ds" srcset="" height={300} width={300} />
                        <h4>Cigarettes After Sex</h4>
                        <p>
                            1. K <br />
                            2. Each Time You Fall In Love <br />
                            3. Sunsetz <br />
                            4. Apocalypse <br />
                            5. Flast <br />
                            6. Sweet <br />
                            7. Opera House <br />
                            8. Truly <br />
                            9. John Wayne <br />
                            10. Young & Dumb <br />
                        </p>
                    </div>
                </div>
                <div className="musicGrid5">
                    <div id="music9">
                        <img src={Affection} alt="ds" srcset="" height={300} width={300} />
                        <h4>Affection</h4>
                        <p>
                            1. Affection <br />
                            2. Keep On Loving You <br />
                        </p>
                    </div>
                    <div id="music10">
                        <img src={Ep1} alt="ds" srcset="" height={300} width={300} />
                        <h4>I.</h4>
                        <p>
                            1. Nothing's Gonna Hurt You Baby <br />
                            2. I'am Firefighter <br />
                            3. Dreaming of You  <br />
                            4. Starry Eyes
                        </p>
                    </div>
                </div>
            </div>
    </>
  )
}
