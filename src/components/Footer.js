import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";
const Footer = () => {
  return (
    <Box
      alignContent="center"
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm" align="center">
        <Typography variant="caption">Hecho con ☕ y ♥️ por Rebe.</Typography>
      </Container>
    </Box>
  );
};
export default Footer;
