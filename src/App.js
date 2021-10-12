import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
    );
};

export default App;