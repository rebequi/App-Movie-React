

const MoviesPageDescription = ({title, description, year, genre, img}) => {
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{year}</p>
        <p>{genre}</p>
        <img src={img}></img>

    </div>
}

export default MoviesPageDescription