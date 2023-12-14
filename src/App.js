import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Music from "./components/Music";
import About from "./components/About";
import Shows from "./components/Shows";

import PistolLyr from "./components/Lyrics/PistolLyr";
import YoualliwantLyr from "./components/Lyrics/YoualliwantLyr";
import Bubblegum from "./components/Lyrics/Bubblegum";
import StopWaiting from "./components/Lyrics/StopWaiting";
import Dontletme from "./components/Lyrics/Dontletme";
import Kissit from "./components/Lyrics/Kissit";
import Heavenly from "./components/Lyrics/Heavenly";
import Youaretheonlygoodthing from "./components/Lyrics/Youaretheonlygoodthing";
import Touch from "./components/Lyrics/Touch";
import Hentai from "./components/Lyrics/Hentai";
import Cry from "./components/Lyrics/Cry";
import Fallinginlove from "./components/Lyrics/Fallinginlove";
import Pure from "./components/Lyrics/Pure";
import Neonmoon from "./components/Lyrics/Neonmoon";
import Crush from "./components/Lyrics/Crush";
import Sesamesyrup from "./components/Lyrics/Sesamesyrup";
import K from "./components/Lyrics/K";
import Eachtimeyoufallinlove from "./components/Lyrics/Eachtimeyoufallinlove";
import Sunsetz from "./components/Lyrics/Sunsetz";
import Apocalypse from "./components/Lyrics/Apocalypse";
import Flash from "./components/Lyrics/Flash";
import Sweet from "./components/Lyrics/Sweet";
import OperaHouse from "./components/Lyrics/OperaHouse";
import Truly from "./components/Lyrics/Truly";
import Johnwayne from "./components/Lyrics/Johnwayne";
import Younganddumb from "./components/Lyrics/Younganddumb";
import Affection from "./components/Lyrics/Affection";
import Keeponlovingyou from "./components/Lyrics/Keeponlovingyou";
import Nothingsgonna from "./components/Lyrics/Nothingsgonna";
import Iamfirefighter from "./components/Lyrics/Iamfirefighter";
import Dreamingofyou from "./components/Lyrics/Dreamingofyou";
import Starryeyes from "./components/Lyrics/Starryeyes";
import MotionPictureSoundTrack from "./components/Lyrics/MotionPictureSoundTrack";

function App() {
  return (
    <div>
      <Header />
      <div className="hero-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cas-fan-page" element={<Home />} />
          <Route path="/music" element={<Music />} />

          <Route path="/music/pistol" element={<PistolLyr />} />

          <Route path="/music/yourealliwant" element={<YoualliwantLyr />} />

          <Route path="/music/bubblegum" element={<Bubblegum />} />
          <Route path="/music/stopwaiting" element={<StopWaiting />} />

          <Route
            path="/music/MotionPictureSoundTrack"
            element={<MotionPictureSoundTrack />}
          />

          <Route path="/music/dontletme" element={<Dontletme />} />
          <Route path="/music/kissit" element={<Kissit />} />
          <Route path="/music/heavenly" element={<Heavenly />} />
          <Route
            path="/music/youaretheonly"
            element={<Youaretheonlygoodthing />}
          />
          <Route path="/music/touch" element={<Touch />} />
          <Route path="/music/hentai" element={<Hentai />} />
          <Route path="/music/cry" element={<Cry />} />
          <Route path="/music/fallinginlove" element={<Fallinginlove />} />
          <Route path="/music/pure" element={<Pure />} />

          <Route path="/music/neonmoon" element={<Neonmoon />} />

          <Route path="/music/crush" element={<Crush />} />
          <Route path="/music/sesamesyrup" element={<Sesamesyrup />} />

          <Route path="/music/k" element={<K />} />
          <Route
            path="/music/eachtimeyoufallinlove"
            element={<Eachtimeyoufallinlove />}
          />
          <Route path="/music/sunsetz" element={<Sunsetz />} />
          <Route path="/music/apocalypse" element={<Apocalypse />} />
          <Route path="/music/flash" element={<Flash />} />
          <Route path="/music/sweet" element={<Sweet />} />
          <Route path="/music/operahouse" element={<OperaHouse />} />
          <Route path="/music/truly" element={<Truly />} />
          <Route path="/music/johnwayne" element={<Johnwayne />} />
          <Route path="/music/younganddumb" element={<Younganddumb />} />

          <Route path="/music/affection" element={<Affection />} />
          <Route path="/music/keeponlovingyou" element={<Keeponlovingyou />} />

          <Route
            path="/music/nothingsgonnahurtyoubaby"
            element={<Nothingsgonna />}
          />
          <Route path="/music/iamfirefighter" element={<Iamfirefighter />} />
          <Route path="/music/dreamingofyou" element={<Dreamingofyou />} />
          <Route path="/music/starryeyes" element={<Starryeyes />} />

          <Route path="/about" element={<About />} />
          <Route path="/shows" element={<Shows />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
