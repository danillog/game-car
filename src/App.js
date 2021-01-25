import React from 'react';
import Background from './components/background';
import './style.css';
import GlobalStyle from './style/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Background />
    </div>
  );
}

export default App;
