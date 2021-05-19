import React, { Profile, Profiler } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import profile from './Profile'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/profile" exact component={profile}/>
    </BrowserRouter>
  );
}

export default App;
