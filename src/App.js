import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import main from './main';
import Page2 from './page2';
import Page3 from './page3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path ="/" component = {main}/>
      <Route path ="/Page2" component = {Page2}/>
      <Route path ="/Page3" component = {Page3}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
