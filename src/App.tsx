import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Cryptos from './Components/Cryptos';

function App() {
  const [content, setContent] = useState<"Home"|"Cryptos">("Home");
  return (
    <div className="App">
      <header className="App-header" />
      <NavBar selector = {setContent}/>
      <div>
        {content === "Home" && <Home/>}
        {content === "Cryptos" && <Cryptos/>}
      </div>
    </div>
  );
}

export default App;
