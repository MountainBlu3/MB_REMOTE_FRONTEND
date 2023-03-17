import { Box, Grid, Typography } from "@mui/material";

export default function MediaTab(props) {
  return (
    <Box
      paddingLeft={{ xs: "7px", sm: "12px", md: "1.21vw" }}
      paddingTop={{ xs: "6px", sm: "9px", md: "0.93vw" }}
      paddingBottom={{ xs: "18px", sm: "29px", md: "3.00vw" }}
      paddingRight={{ xs: "8px", sm: "13px", md: "1.36vw" }}
    >
      <Typography fontWeight={"800"} fontSize={"1.27em"}>
        Media
      </Typography>

      <Grid
        marginTop={{ xs: "7px", sm: "11px", md: "1.14vw" }}
        container
        columnSpacing={{ xs: "5px", sm: "8px", md: "0.79vw" }}
        rowSpacing={{ xs: "8px", sm: "12px", md: "1.29vw" }}
      >
        {new Array(5 * 3).fill(0).map((item) => (
          <Grid item xs={4}>
            <Box
              // width={{ xs: "43px", sm: "68px", md: "7.14vw" }}
              height={{ xs: "43px", sm: "68px", md: "7.14vw" }}
              borderRadius={{ xs: "9px", sm: "14px", md: "1.43vw" }}
              bgcolor="#D9D9D9"
            ></Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
