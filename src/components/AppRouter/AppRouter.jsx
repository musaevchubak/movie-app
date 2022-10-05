import React from 'react';
import {Container} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Trending from "../../pages/Trending/Trending";
import Movies from "../../pages/Movies/Movies";
import Series from "../../pages/Series/Series";
import Search from "../../pages/Search/Search";

const AppRouter = () => {
  return (
    <div className="app">
      <Container>
        <Routes>
          <Route path='/' element={<Trending/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/series' element={<Series/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Container>
    </div>
  );
};

export default AppRouter;
