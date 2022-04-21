import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const SearchBar = () => {
  const [moviesResults, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });
    useEffect(() => {
        if (searchParams.get("query")){fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=92b7c9e2808de339886a0b75ca3aa28e&query=${searchParams.get(
              "query"
            )}`
          )
            .then((res) => res.json())
            .then((data) => setMovies(data.results));}
    
      
  }, [searchParams]);


  const handleChange = (e) => {
    setSearchParams({
      query: e.target.value,
    });

  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search a movie"
        onChange={handleChange}
        value={searchParams.get("query")}
      ></input>
      <div>
        { moviesResults.length === 0 ? <p>No results</p> :moviesResults.map((movie) => (
          <MovieCard
            title={movie.title}
            img={movie.poster_path}
            key={movie.id}
          />
        ))}
        
      </div>
    </div>
  );
};

export default SearchBar;

