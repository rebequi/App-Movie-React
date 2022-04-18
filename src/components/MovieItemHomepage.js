import "./MovieItemHomepage.css"

const MovieItemHomepage = ({title, image, link}) => {
    return (
        <div className="movie-item-container">
          <img className="movie-item-image" src = {image}/>
          <p>{title}</p>
          <a href={link}>{">"}</a>
        </div>
    )
}

export default MovieItemHomepage