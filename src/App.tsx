import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './home/Home';

function App() {

  return (
    <div className="App__box">
          <Header/>
          <Home/>
          <Footer/>
           </div>
  )
}

export default App
