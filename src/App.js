import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Music from './components/Music';
import AboutUs from './components/AboutUs';
import Shows from './components/Shows';


function App() {
  return (
    <div>
        <Header />
      <div className='hero-container' >
        <Home />
        <Music />
        <AboutUs />
        <Shows />
      </div>
      <Footer></Footer>
   </div>
  );
}

export default App;
