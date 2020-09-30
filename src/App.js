import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from './context/AppContext'
import Home from './components/pages/Home'
import Splash from './components/pages/Splash'
import About from './components/pages/About'

const App = () => {
  return (
    <BrowserRouter>
      {/* <AppContext.provider value={{}}> */}
        <Switch>
        <Route exact path="/" render={(props) => <Splash />} />
        <Route path="/Home" render={(props) => <Home />} />
        <Route path="/about" render={(props) => <About />} />
        </Switch>
      {/* </AppContext.provider> */}
    </BrowserRouter>
  );
}

export default App;
