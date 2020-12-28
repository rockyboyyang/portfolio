import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContext } from './context/AppContext'
import Splash from './components/pages/Splash'
import About from './components/pages/About'
import ReactGA from 'react-ga';

const App = () => {

  const [currentPage, setCurrentPage] = useState('')
  const [openedPortfolio, setOpenedPortfolio] = useState(false)

  function initializeReactGA() {
    ReactGA.initialize('UA-123791717-1');
    ReactGA.pageview('/about');
  }

  useEffect(() => {
    initializeReactGA()
  }, [])

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ currentPage, setCurrentPage, openedPortfolio, setOpenedPortfolio}}>
        <Switch>
        <Route exact path="/" render={(props) => <Splash />} />
        <Route path="/about" render={(props) => <About />} />
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
