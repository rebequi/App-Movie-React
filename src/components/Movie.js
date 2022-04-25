import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MoviesPageDescription from "./MoviesPageDescription";

const Movie = ({ }) => {
  const [movies, setMovies] = useState([]);
  let params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  let genreName = useParams
  return (
    
    <div>
        
          {movies?.genres?.map((genre) => (
            genreName = genre.name
          ))}
        
      <MoviesPageDescription
        title={movies.title}
        year={movies.release_date}
        img={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
        description={movies.overview}
        background={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
        genres={genreName}
      />
        
      
    
      
    </div>
  );
};
export default Movie;
