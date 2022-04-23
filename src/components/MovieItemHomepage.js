import "./MovieItemHomepage.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar } from "@mui/material";

const MovieItemHomepage = ({ title, image, link }) => {
  return (
    <div className="movie-item-container">
     
        <Avatar className="movie-item-image" src={image} />
        <p>{title}</p>
      
      <a href={link}>
        <ArrowForwardIosIcon
          sx={{
            borderRadius: 10,
            padding: 0.5,
            bgcolor: "white",
          }}
        />
      </a>
    </div>
  );
};

export default MovieItemHomepage;
