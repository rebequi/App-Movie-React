import "./MovieCard.scss";

const MovieCard = ({title, img}) => {
return (
    <article className="movie-card">
        
        <img src = {`https://image.tmdb.org/t/p/w500/${img}`}/>
        <h3>{title}</h3>
    </article>
)
}
export default MovieCard