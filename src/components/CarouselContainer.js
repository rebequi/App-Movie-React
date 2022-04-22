import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from "react";

const CarouselContainer = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=en-AR&page=1`
        )
          .then((res) => res.json())
          .then((data) => setMovies(data.results));
      }, []);
  return (
      <div className="carousel-container">
        <Carousel fade >
        {movies.map (movie => <Carousel.Item key="movie.id" interval={4000}>
        
        <img
          className="d-block w-100"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{movie.title}</h5>
          <p>{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>) }
     
  </Carousel>

      </div>
    
  )

};
export default CarouselContainer;
