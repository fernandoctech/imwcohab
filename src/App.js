import React from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Painel from './components/Painel';
import Slider from  './components/Slider';


function App() {
  return (
    <div className="App">
     <header>
       <Navbar></Navbar>
       <SideNav></SideNav>

     </header>
     <main>
       <Painel></Painel>
       <Slider></Slider>
       
     </main>
     <footer>
     </footer>
    </div>
  );
}

export default App;
