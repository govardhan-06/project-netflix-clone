import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import axios from 'axios'
import {useState,useEffect} from 'react'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost title={'Netflix Originals'} types={'originals'}/>
      <RowPost title={'Action'} isSmall types={'action'}/>
    </div>
  );
}

export default App;
