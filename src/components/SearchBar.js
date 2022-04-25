import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { TextField } from "@mui/material";
import "./SearchBar.scss";

const SearchBar = (title_page) => {
  const [moviesResults, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });
  useEffect(() => {
    if (searchParams.get("query")) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=92b7c9e2808de339886a0b75ca3aa28e&query=${searchParams.get(
          "query"
        )}`
      )
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setSearchParams({
      query: e.target.value,
    });
  };

  return (
    <div>
      <div className="search-movie-container">
        <h2>Search your movie</h2>
        <div>
        <TextField sx={{
          width:300,
        }}
          id="outlined-basic"
          label="Search Movie"
          variant="outlined"
          type="text"
          placeholder="Search a movie"
          onChange={handleChange}
          value={searchParams.get("query")}
        ></TextField>

        </div>
       
      </div>


      <div className="search-movies-container">
        {moviesResults.length === 0 ? (
          <p>No results {":-("}</p>
        ) : (
          moviesResults.map((movie) => (
            <MovieCard
              title={movie.title}
              img={movie.poster_path}
              key={movie.id}
              link={`movie/${movie.id}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBar;
