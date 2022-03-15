import React from 'react';
import './App.css';
import Nav from './component/nav/Nav';
import Topnav from './component/topnav/TopNav';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
       <Topnav />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
