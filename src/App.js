import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Music from './components/Music';
import AboutUs from './components/AboutUs';
import Shows from './components/Shows';


function App() {
  return (
    <div >
        <Header></Header>
      <div className='hero-container' >

        {/* <Practice style={{display:"flex",justifyContent:"center",alignItem:"center",flexWrap:"column wrap",margin:"auto"}}></Practice>
        <Practice1 />
        <Practice2 /> */}
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
