import { Link } from "react-router-dom";
import { AppBar, styled , Toolbar, Typography } from "@mui/material";
import "./NavBar.scss"
import { Movie } from "@mui/icons-material";




const StyledToolBar = styled(Toolbar) ({
  display: "flex",
  justifyContent: "space-between",

});

const NavBar = () => {
  return (
    <AppBar position="static" style={{
      backgroundColor:'black'
    }}>
      <StyledToolBar>
        <Movie sx={{color:'white'}}></Movie>
      <Toolbar>
        <Typography>
         
          <Link to="/" className="link-style">
            Home
          </Link>
        </Typography>
        <Typography>
          <Link to="/latest-movies" className="link-style">
           Latest Movies
          </Link>
        </Typography>
        <Typography>
          <Link to="/popular-movies" className="link-style">
           Popular Movies
          </Link>
        </Typography>
        <Typography>
          <Link to="/search" className="link-style">
            Search
          </Link>
        </Typography>
      </Toolbar>
      </StyledToolBar>
      
    </AppBar>
  );
};

export default NavBar;
