import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from './context/AppContext'
import Home from './components/pages/Home'
import Splash from './components/pages/Splash'
import Skills from './components/pages/Skills'
import About from './components/pages/About'

const App = () => {
  return (
    <BrowserRouter>
      {/* <AppContext.provider value={{}}> */}
        <Switch>
        <Route exact path="/" render={(props) => <Splash />} />
        <Route path="/Home" render={(props) => <Home />} />
        <Route path="/about" render={(props) => <About />} />
        <Route path="/skills" render={(props) => <Skills />} />
        </Switch>
      {/* </AppContext.provider> */}
    </BrowserRouter>
  );
}

export default App;
