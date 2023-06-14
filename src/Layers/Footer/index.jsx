import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../../Assets/Images/logo.png";
import "./styles.css";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
const pages = ["Events", "Category", "Gallery", "Other-churches", "About Us"];

const Footer = () => {
  const handleClick = () => {
    console.log("Calling", document.getElementById("segni"));
    document.getElementById("segni").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box className="footer-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box className="img-container">
          <img src={logo} alt="Church Logo" />
        </Box>
        <Box sx={{ display: "flex" }}>
          {pages.map((page) => (
            <MenuItem key={page}>
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
            </MenuItem>
          ))}
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      />
      <Box className="notice-message-container">
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
  );
};

export default Footer;
