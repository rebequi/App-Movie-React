import CarouselContainer from "./CarouselContainer";
import "./Home.css";
import ListOfMovies from "./ListOfMovies";



const Home = () => {
  return (
    <div>
      <CarouselContainer />

      <section className="home-movie-list-container">
       
          <ListOfMovies title="Popular Movies" url="popular" />
        
        
          <ListOfMovies title="Top Rated Movies" url="top_rated" />
       
      </section>
    </div>
  );
};
export default Home;
