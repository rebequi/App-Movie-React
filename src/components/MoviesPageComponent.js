import { useState, useEffect } from "react";
import "./MoviesPageComponent.css";

const MoviesPageComponent = ({
  title_page,
  movies,
  tittle_movie,
  url_page,
}) => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url_page}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=en-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setFilms(data.results));
  }, []);

  return (
    <div className="movies-component-container">
      <h2> {title_page}</h2>
      <div className="movies-cards-container">
        {films.map((film) => (
          <div className="movie-card" key={film.id}>
            {film.title}
          </div>
        ))}
      </div>

      <p>paginado</p>
    </div>
  );
};

export default MoviesPageComponent;
