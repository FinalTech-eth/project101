import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "../../../API/axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
export default function SignIn() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get("userName")?.toLowerCase(),
      password: data.get("password"),
    };
    const currentTime = new Date().getTime();
    // Calculate the timestamp for 24 hours later
    const expiryTime = currentTime + 24 * 60 * 60 * 1000;
    try {
      setIsSubmitting(true);
      const response = await axios.post("/auth/signin", formData);
      console.log(response.data);
      localStorage.setItem("admin", JSON.stringify(response.data));
      localStorage.setItem("expiryTime", JSON.stringify(expiryTime));
      navigate("/dashboard");

      toast.success("logged in successfully!");

      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.response?.data.message);
      toast.error("Failed to login.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {errorMsg ? (
              <Typography variant="h6" sx={{ color: "red" }}>
                {errorMsg}
              </Typography>
            ) : (
              ""
            )}
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="admin"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
               <LoadingButton
        variant="contained"
        type="submit"
        loading={isSubmitting}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        fullWidth
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </LoadingButton>
              
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}
