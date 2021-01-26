import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameOver from './pages/GameOver';
import Home from './pages/Home';
import Main from './pages/Main';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Main} />
        <Route exact path="/gameover" component={GameOver} /> 
      </Switch>
    </BrowserRouter>
  );
}