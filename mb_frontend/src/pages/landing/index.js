import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import logo from "../../images/register/logo.png";
import topBg from "../../images/register/topBg.png";

const Landing = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box
      style={{
        overflow: "hidden",
        position: "relative",
        color: "white",
        background:
          "linear-gradient(180deg, #02282F 26.76%, rgba(8, 7, 54, 0.9) 75.3%, #131313 91.61%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          top: 0,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            mx: "auto",
            width: { xs: "117px", sm: "187px", md: "19.50vw" },
            height: { xs: "34px", sm: "54px", md: "5.64vw" },
          }}
        >
          <img src={topBg} alt="react_image" width="100%" height={"100%"} />
        </Box>
      </Box>
      <Grid
        container
        style={{ minHeight: "100vh", position: "relative", zIndex: 2 }}
      >
        <Grid item xs={12} sm={6}>
          <Stack
            pl={{ xs: "16px", sm: "66px", md: "6.93vw" }}
            pr={{ xs: "16px", sm: "23px", md: "2.43vw" }}
            mt={{ xs: "33px", sm: "53px", md: "5.50vw" }}
            direction={{ sm: "row" }}
          >
            <Box
              width={"100%"}
              maxWidth={{ xs: "43px", sm: "68px", md: "7.14vw" }}
              height={{ xs: "43px", sm: "68px", md: "7.14vw" }}
            >
              <img src={logo} alt="react_image" width="100%" height={"100%"} />
            </Box>
          </Stack>
          <Box
            mt={{ xs: "37px", sm: "13vw", md: "15.14vw" }}
            // pr={{ xs: "16px", sm: "23px", md: "2.43vw" }}
            // pl={{ xs: "4rem", sm: "57px", md: "10.93vw" }}
            // textALign={{ xs: "center" }}
          >
            <Typography
              align={isSmallScreen ? "center" : "left"}
              color="primary"
              fontWeight="700"
              fontSize="2.50em"
            >
              Hello,
            </Typography>
            <Typography color="primary" fontWeight="700" fontSize="2.50em">
              Welcome to
            </Typography>
            <Typography color="primary" fontWeight="700" fontSize="2.50em">
              Mountain Blue
            </Typography>
            <Typography fontWeight={"400"}>The best home automation</Typography>
          </Box>
          <Box
            mt={{ xs: "34px", sm: "10vw", md: "12.71vw" }}
            pl={{ xs: "16px", sm: "57px", md: "10.93vw" }}
          >
            <Button
              width="60%"
              variant="contained"
              sx={{
                background: "linear-gradient(180deg, #14DCDA 0%, #166A76 100%)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                fontSize: "1.25em",
                color: "white",
                fontWeight: "700",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
        <Grid
          style={{
            background:
              "linear-gradient(180deg, rgba(13, 13, 13, 0.55) 0%, rgba(13, 13, 13, 0) 100%)",
            height: "100%",
            minHeight: "100vh",
          }}
          item
          xs={12}
          sm={6}
        >
          <Box
            mt={{ xs: "64px", sm: "103px", md: "10.71vw" }}
            pb={{ xs: "42px", sm: "68px", md: "7.07vw" }}
            pr={{ xs: "16px", sm: "26px", md: "2.71vw" }}
            pl={{ xs: "16px", sm: "64px", md: "6.71vw" }}
          >
            <Typography>Hello Loves</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
