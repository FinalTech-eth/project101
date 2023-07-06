import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../../Assets/Images/logo.png";
import "./styles.css";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import topTornEdge from '../../Assets/Images/top-torn-edge.png'

const pages = ["Events", "Category", "Gallery", "Other-churches", "About Us"];

const Footer = () => {
  const handleClick = () => {
    console.log("Calling", document.getElementById("segni"));
    document.getElementById("segni").scrollIntoView({ behavior: "smooth" });
  };
  const edgeImageStyle = {
    backgroundImage: `url(${topTornEdge})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '-50px',
    zIndex: 100,
    height: '50px',
    position: 'relative'
  }
  return (
    <>
      <div style={edgeImageStyle} ></div>

      <Box className="footer-container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box className="img-container">
            <img src={logo} alt="Church Logo" />
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ width: "60%", placeContent: "center" }}
          >
            {pages.map((page) => (
              <Grid item xs={12} md={6} lg={2} key={page}>
                <Typography
                  textAlign="center"
                  onClick={handleClick}
                  sx={{
                    fontSize: "0.75562rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {page}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        />
        <Box>
          <Typography
            variant="h4"
            sx={{
              mt: 2,
              fontSize: "1.3125rem",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            Call us 24\7 800.567.1234
          </Typography>
        </Box>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            width: "50%",
            marginX: "auto",
            mt: 2,
            mb: 2,
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" sx={{ color: "#fff" }}>
            355 S Grand Ave, Los Angeles, CA 90071
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "rgba(255,255,255,0.3)" }}>
            © 2023 Calm. All rights reserved. Privacy Policy
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
