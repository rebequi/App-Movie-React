import { useState, useEffect } from "react";
import MoviesPageDescription from "./MoviesPageDescription";
import { useParams } from "react-router-dom";

const Movie = ({ title_page, movie_id}) => {
  const [movies, setMovies] = useState([]);
  let params = useParams();
  
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=en-US`

      // ese 550 se reemplaza por movie_id
      
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    
      <div>
        <h2>{movies.title}</h2>
        <p>{movies.release_date}</p>
        <img src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}></img>
        <p>{movies.overview}</p>


        <div>
          
            {/* <MoviesPageDescription
        //       title={movies.title}
        //       img src={movies.poster_path}
        //       year={movies.year}
        //       description={movies.overview}
        //     /> */}
            
          

          
        </div>

      </div>
    
  );
};
export default Movie;
