import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContext } from './context/AppContext'
import Splash from './components/pages/Splash'
import About from './components/pages/About'

const App = () => {

  const [currentPage, setCurrentPage] = useState('')
  const [openedPortfolio, setOpenedPortfolio] = useState(false)

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
