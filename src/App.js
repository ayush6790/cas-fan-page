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
