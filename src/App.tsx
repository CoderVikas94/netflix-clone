import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Page from './components/page/Page';
import Home from './home/Home';

function App() {

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };



  return (
    <div className="App__box">
          <Header/>
          <Home showModal={showModal}/>
          <Footer/>
          <Page open={open} showModal={showModal} hideModal={hideModal}/>
           </div>
  )
}

export default App
