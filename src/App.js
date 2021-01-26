import React from 'react';
import Background from './components/background';
import CarBlue from './components/CarBlue';
import './style.css';
import GlobalStyle from './style/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Background />
        <CarBlue className="left" />
    </div>
  );
}

export default App;
