import React from 'react';
import './App.css';
import Banner from "./components/banner/Banner";
import Information from './components/information/Information';
import Toasted from "./components/toasted/Toasted";
import Countdown from "./components/countdown/Countdown";
// import Gallery from './components/gallery/Gallery';

function App() {
  return (
    <div className='wrapper'>
      <Banner />
      <Toasted />
      <Countdown />
      <Information />
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
