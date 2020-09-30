import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from './context/AppContext'
import Home from './components/pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      {/* <AppContext.provider value={{}}> */}
        <Switch>
        <Route path="/" render={(props) => <Home />} />
        <Route path="/home" render={(props) => <Home />} />
        </Switch>
      {/* </AppContext.provider> */}
    </BrowserRouter>
  );
}

export default App;
