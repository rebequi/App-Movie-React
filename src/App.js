import { useState } from "react";
import NavBar from './components/NavBar';
import Home from './components/Home';
import TopMov from './components/TopMov';
import PopularMov from './components/PopularMov';
import Search from './components/Search';
import { Routes, Route, BrowserRouter, Link} from "react-router-dom";
import "./App.css";

const url =
  "https://api.themoviedb.org/3/movie/550?api_key=d1442e8bf87a64d50e46ee06557beec6";

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <NavBar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-movies" element={<TopMov />}/>
          <Route path="/popular-movies" element={<PopularMov />} />
          <Route path="/search" element={<Search />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
