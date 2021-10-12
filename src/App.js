import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
    );
};

export default App;