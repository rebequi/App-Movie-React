import NavBar from './components/NavBar';
import Home from './components/Home';
import LatestMov from './components/LatestMov';
import PopularMov from './components/PopularMov';
import Search from './components/Search';
import Footer from './components/Footer'
import Movie from './components/Movie'

import { Routes, Route, BrowserRouter,} from "react-router-dom";
import "./App.css";


const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <NavBar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest-movies" element={<LatestMov />}/>
          <Route path="/popular-movies" element={<PopularMov />} />
          <Route path="/search" element={<Search />}/>
          <Route path="/movie/:movieId"  element={<Movie />}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
