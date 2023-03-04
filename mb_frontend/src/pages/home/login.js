import { Box, Button, Grid, Typography } from "@mui/material";
import topBg from "../../images/register/topBg.png";
import bottomBg from "../../images/register/bottomBg.png";
import logo from "../../images/register/logo.png";
import mainImage from "../../images/register/main.png";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import GradientInput from "../../components/general/gradientInput";

export default function LoginPage(props) {
  return (
    <Box
      style={{
        overflow: "hidden",
        position: "relative",
        color: "white",
        background: "linear-gradient(180deg, #02282F 26.76%, rgba(8, 7, 54, 0.9) 75.3%, #131313 91.61%)",
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
      <Grid container style={{ minHeight: "100vh" }}>
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
            {/* <Box mt={{ xs: "37px", sm: "59px", md: "6.14vw" }}>
              <Typography color="primary" textAlign="center" fontWeight="700" fontSize="1.46em">
                MOUNTAIN BLUE
              </Typography>
              <Typography fontWeight={"500"}> (Artificial Intelligence/Information Technology/Block chain) </Typography>
            </Box> */}
          </Stack>
          <Box
            pr={{ xs: "16px", sm: "23px", md: "2.43vw" }}
            mt={{ xs: "25px", sm: "40px", md: "4.21vw" }}
            pl={{ xs: "16px", sm: "57px", md: "5.93vw" }}
          >
            <Box width="100%" maxWidth={{ sm: "407px", md: "42.50vw" }} height={{ sm: "384px", md: "40.07vw" }}>
              <img className="img2" src={mainImage} alt="react_image" width="75%" height={"70%"} />
            </Box>
          </Box>
        </Grid>
        <Grid
          style={{
            background: "linear-gradient(180deg, rgba(13, 13, 13, 0.55) 0%, rgba(13, 13, 13, 0) 100%)",
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
            <Typography
              mb={{ xs: "29px", sm: "46px", md: "4.79vw" }}
              textAlign="center"
              fontWeight="700"
              fontSize="1.46em"
            >
              Log in
            </Typography>

            <Stack gap={{ xs: "13px", sm: "21px", md: "2.14vw" }}>
              <GradientInput variant="outlined" placeholder="E-mail" />
              <GradientInput variant="outlined" type={"password"} placeholder="Password" />
            </Stack>

            <Box mt={{ xs: "34px", sm: "55px", md: "5.71vw" }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: "linear-gradient(180deg, #14DCDA 0%, #166A76 100%)",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                  fontSize: "1.25em",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Log in
              </Button>
            </Box>

            <Box mt={{ xs: "11px", sm: "18px", md: "1.86vw" }} textAlign={"center"}>
              <Typography>
                Do not have an account?
                <Link to={"/"}>
                  <Button sx={{ padding: 0, fontWeight: "700" }}> Register </Button>
                </Link>
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                Forgot password? <Button sx={{ fontSize: "15px", padding: 0, fontWeight: "700" }}> click here </Button>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          position: "absolute",
          width: "100%",
          mixBlendMode: "multiply",
          bottom: { xs: "-35px", sm: "-55px", md: "-5.79vw" },
          left: { xs: "-29px", sm: "-47px", md: "-4.86vw" },
          textAlign: "center",
        }}
      >
        <Box sx={{ mx: "auto" }}>
          <img src={bottomBg} alt="react_image" width="100%" height={"100%"} />
        </Box>
      </Box> */}
    </Box>
  );
}
