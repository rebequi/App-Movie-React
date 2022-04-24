import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Icon,
  Typography,
} from "@mui/material";
import { typography } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const MovieCard = ({ title, img, link }) => {
  return (
    <article className="movie-card">
      <Card
        sx={{
          maxWidth: 220,
          margin: 1,
          marginBottom: 5,
          bgcolor: "#f5f5f5",
          height: 500,
          paddingBottom: 5,
          justifyContent: "space-between",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="380"
            image={`https://image.tmdb.org/t/p/w500/${img}`}
            alt="movie poster"
          />
        </CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            sx={{
              height: 40,
            }}
          >
            {title}
          </Typography>
          <CardActions>
            <Button size="small" color="primary">
              <Link to={link}><VisibilityIcon /></Link>
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </article>
  );
};
export default MovieCard;
