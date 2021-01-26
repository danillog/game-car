import React from 'react';
import Routes from './routes.js';
import './style.css';
import GlobalFonts from './style/fonts';
import GlobalStyle from './style/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalFonts />
      <Routes />
    </div>
  );
}

export default App;
