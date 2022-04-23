import { Link } from "react-router-dom";
import { AppBar, styled , Toolbar, Typography } from "@mui/material";
import "./NavBar.css"



const StyledToolBar = styled(Toolbar) ({
  display: "flex",
  justifyContent: "space-between",

});

const NavBar = () => {
  return (
    <AppBar position="static" color="secondary">
      <StyledToolBar>
      <Toolbar>
        <Typography>
         
          <Link to="/" className="link-style">
            Home
          </Link>
        </Typography>
        <Typography>
          <Link to="/latest-movies">
           Latest Movies
          </Link>
        </Typography>
        <Typography>
          <Link to="/popular-movies">
           Popular Movies
          </Link>
        </Typography>
        <Typography>
          <Link to="/search">
            Search
          </Link>
        </Typography>
      </Toolbar>
      </StyledToolBar>
      
    </AppBar>
  );
};

export default NavBar;
