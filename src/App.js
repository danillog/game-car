import React from 'react';
import Main from './components/Main';
import './style.css';
import GlobalStyle from './style/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
