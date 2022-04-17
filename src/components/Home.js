import "./Home.css";
import ListOfMovies from "./ListOfMovies";
import MovieItemHomepage from "./MovieItemHomepage";

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
   
      
      <section className="home-movie-list-container">
        

        <ListOfMovies tittle="Popular Movies" url="popular" />
        <ListOfMovies tittle="Top Rated Movies" url="top_rated" />
      </section>
    </div>
  );
};
export default Home;
