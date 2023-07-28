import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Music from './components/Music';
import About from './components/About';
import Shows from './components/Shows'; 

import PistolLyr from './components/Lyrics/PistolLyr';
import YoualliwantLyr from './components/Lyrics/YoualliwantLyr';
import Bubblegum from './components/Lyrics/Bubblegum';
import StopWaiting from './components/Lyrics/StopWaiting';
import Dontletme from './components/Lyrics/Dontletme';
import Kissit from './components/Lyrics/Kissit';
import Heavenly from './components/Lyrics/Heavenly';
import Youaretheonlygoodthing from './components/Lyrics/Youaretheonlygoodthing';
import Touch from './components/Lyrics/Touch'
import Hentai from './components/Lyrics/Hentai';
import Cry from './components/Lyrics/Cry';
import Fallinginlove from './components/Lyrics/Fallinginlove';
import Pure from './components/Lyrics/Pure' 
import Neonmoon from './components/Lyrics/Neonmoon';
import Crush from './components/Lyrics/Crush';
import Sesamesyrup from './components/Lyrics/Sesamesyrup';


function App() {
  return (
    <div>
        <Header />
        <div className='hero-container'>
      <Routes>
        <Route path="/" element={<Home />}/>      
        <Route path="/cas-fan-page" element={<Home />}/>
            <Route path="/music" element={<Music />}/>      

        <Route path="/music/pistol" element={<PistolLyr />}/> 
        <Route path="/music/yourealliwant" element={<YoualliwantLyr />}/> 
        <Route path="/music/bubblegum" element={<Bubblegum />}/> 
        <Route path="/music/stopwaiting" element={<StopWaiting />}/> 
        <Route path="/music/dontletme" element={<Dontletme />}/> 
        <Route path="/music/kissit" element={<Kissit />}/> 
        <Route path="/music/heavenly" element={<Heavenly />}/> 
        <Route path="/music/youaretheonly" element={<Youaretheonlygoodthing />}/> 
        <Route path="/music/touch" element={<Touch />}/> 
        <Route path="/music/hentai" element={<Hentai />}/> 
        <Route path="/music/cry" element={<Cry />}/> 
        <Route path="/music/fallinginlove" element={<Fallinginlove />}/> 
        <Route path="/music/pure" element={<Pure />}/> 
        <Route path="/music/neonmoon" element={<Neonmoon />}/> 
        <Route path="/music/crush" element={<Crush />}/> 
        <Route path="/music/sesamesyrup" element={<Sesamesyrup />}/> 



        <Route path="/about" element={<About />}/>      
        <Route path="/shows" element={<Shows />}/>      
        </Routes>
      </div>     
      {/* <PistolLyr />  */}
      <Footer />
   </div>
  );
}

export default App;
