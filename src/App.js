import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav/MainNav";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
      <BrowserRouter>
         <Header/>
         <AppRouter/>
         <SimpleBottomNavigation/>
      </BrowserRouter>
  );
}

export default App;
