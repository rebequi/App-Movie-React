import MoviesPageComponent from "./MoviesPageComponent"


const PopularMov = () => {


  return (
    <div>
      <MoviesPageComponent
      title_page="Popular Movies"
      movies = {["popular1", "popular2", "popular3"]}
      url_page ="popular"
      />
      
    </div>
  );
};
export default PopularMov;
