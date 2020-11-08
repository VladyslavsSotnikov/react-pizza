import React from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './page/Home'
import Card from './page/Card'

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Route path = '/' exact ><Home/></Route>
      <Route path = '/card' exact> <Card /> </Route>
    </div>
  );
}

export default App;
