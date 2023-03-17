import { Box, Typography } from "@mui/material";

export default function LinksTab(props) {
  return (
    <Box paddingY={{ xs: "7px", sm: "12px", md: "1.21vw" }} paddingX={{ xs: "9px", sm: "14px", md: "1.43vw" }}>
      <Typography fontWeight={"800"} fontSize={"1.27em"}>
        Links
      </Typography>
      <Typography textAlign={"center"} fontSize={"0.72em"}>
        there are currently no links available at the moment
      </Typography>
    </Box>
  );
}
