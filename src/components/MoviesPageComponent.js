import { useState, useEffect } from "react";
import "./MoviesPageComponent.scss";
import MovieCard from "./MovieCard";
import ReactPaginate from "react-paginate";



const MoviesPageComponent = ({
  title_page,
  url_page,
  current_page,
}) => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url_page}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=en-AR&page=1${current_page}`
    )
      .then((res) => res.json())
      .then((data) => setFilms(data.results));
  }, []);

  const handlePageClick = (data) => {
    console.log (data.selected)
    let currentPage = data.selected + 1
    fetch(
      `https://api.themoviedb.org/3/movie/${url_page}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=en-AR&page=1${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => setFilms(data.results));
  };

  

  return (
    <div>
      <div>
        <h2> {title_page}</h2>
      </div>

      <div className="movies-cards-container">
        {films.map((film) => (
          <MovieCard
            title={film.title}
            img={film.poster_path}
            link= {`/movie/${film.id}`}
            
          />
        ))}
      </div>
      
      

      <ReactPaginate 
      previousLabel={'<<'}
      nextLabel={'>>'}
      pageCount={3}
      onPageChange={handlePageClick}
      containerClassName={"pagination justify-content-center"}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      activeClassName={'active'}
      />

    </div>
  );
};

export default MoviesPageComponent;
