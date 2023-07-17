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
