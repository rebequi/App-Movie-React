import { useState, useEffect } from "react";
import './ListOfMovies.css'
import MovieItemHomepage from "./MovieItemHomepage";


const ListOfMovies = ({ title, url }) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=en-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="home-movie-list">
      <h1>{title}</h1>
       {movies.map (movie =>    <MovieItemHomepage 
      title={movie.title}
      image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
      link={`${movie.id}`}
      />)}  
    </div>
  );
};

export default ListOfMovies;
