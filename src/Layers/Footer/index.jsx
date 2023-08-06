import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../../Assets/Images/logo.png";
import "./styles.css";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import topTornEdge from "../../Assets/Images/top-torn-edge.png";
import { useNavigate } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "@mui/material/Link";

const pages = [
  {
    id: "Events",
    name: "Events",
  },

  {
    id: "Notice",
    name: "Notice",
  },
  {
    id: "Gallery",
    name: "Gallery",
  },
  {
    id: "books-and-articles",
    name: "Books and Articles",
    hasOwnPage: true,
    pageURL: "/books-and-articles",
  },
  {
    id: "Other-churches",
    name: "Other Churches",
  },
  {
    id: "About-us",
    name: "About Us",
    hasOwnPage: true,
    pageURL: "/about",
  },
  {
    id: "Contact-us",
    name: "Contact Us",
    hasOwnPage: true,
    pageURL: "/contact-us",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (page) => {
    if (page.hasOwnPage) {
      navigate(page.pageURL);
    } else {
      const section = document.getElementById(page.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate({ pathname: "/", search: `?section=${page.id}` });
      }
    }
  };
  const edgeImageStyle = {
    backgroundImage: `url(${topTornEdge})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "-50px",
    zIndex: 100,
    height: "50px",
    position: "relative",
  };
  return (
    <>
      <div style={edgeImageStyle}></div>

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
              <Grid item xs={12} md={6} lg={2} key={page.id}>
                <Typography
                  textAlign="center"
                  onClick={() => handleClick(page)}
                  sx={{
                    fontSize: "0.75562rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {page.name}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              marginTop: "10px",
            }}
          >
            <a href="https://youtube.com/@ACIFOttawa" target="_blank">
              <YouTubeIcon sx={{ color: "red", fontSize: "1.5rem" }} />
            </a>
          </Box>
          <Typography
            variant="h4"
            sx={{
              mt: 2,
              fontSize: "1.3125rem",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            Call us (819)712-1100
            <br />
            Pastor Eyob Melese
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
            1196 Wellington Street, K1Y 2Z5
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "rgba(255,255,255,0.3)" }}
          >
            {/* © 2023 Calm. All rights reserved. Privacy Policy */}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
