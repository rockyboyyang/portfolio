import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from './context/AppContext'
import Home from './components/pages/Home'
import Splash from './components/pages/Splash'
import Skills from './components/pages/Skills'
import About from './components/pages/About'

const App = () => {

  const [currentPage, setCurrentPage] = useState('')
  const [openedPortfolio, setOpenedPortfolio] = useState(false)

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ currentPage, setCurrentPage, openedPortfolio, setOpenedPortfolio}}>
        <Switch>
        <Route exact path="/" render={(props) => <Splash />} />
        <Route path="/Home" render={(props) => <Home />} />
        <Route path="/about" render={(props) => <About />} />
        <Route path="/skills" render={(props) => <Skills />} />
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
