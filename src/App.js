import React from 'react';
import Header from './Components/Navbar';
import Home from './Components/Home';
import './App.css';
import Certificates from './Components/Certificates';
import Aboutme from './Components/Aboutme';


function App() {
  return (
    <div>
      <Header/>
      <div className="my-contents">
        <Home/>
        <Aboutme/>
        <Certificates/>
      </div>
    </div>      
  );
}

export default App;
