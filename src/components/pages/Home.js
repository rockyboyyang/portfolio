import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../../context/AppContext'

const Home = () => {
    return (
        <h1>Hello World</h1>
    );
}

export default Home;
