
import { Paper, Typography } from "@mui/material";
import "./MoviesPageDescription.scss";

const MoviesPageDescription = ({
  title,
  description,
  year,
  genres,
  img,
  background,
}) => {
  return (
    <div className="movie-description-container">
      <div className="paper-container">
        <Paper
          sx={{
            backgroundImage: `url(${background})`,
            height: "100vh",
            backgroundPosition: "center",
            opacity: "0.6",
          }}
        ></Paper>
      </div>

      <div className="movie-info-container">
        <div>
          <img src={img}></img>
        </div>
        <div className="movie-info-description">
          
          <h2>{title}</h2>
          <Typography variant="subtitle2">
              Description
          </Typography>
          <Typography variant="caption">{description}</Typography>
          <Typography variant="subtitle2"> Release Date</Typography>
          <Typography variant="caption"> {year}</Typography>
          <Typography variant="subtitle2"> Genre </Typography>
          <Typography variant="caption"> {genres}</Typography>
          
        </div>
      </div>
    </div>
  );
};

export default MoviesPageDescription;
