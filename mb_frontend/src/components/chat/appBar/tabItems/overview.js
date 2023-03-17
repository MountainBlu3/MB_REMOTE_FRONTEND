import { Box, Stack, Typography } from "@mui/material";
import { icons } from "../../../../images/chat/images";

export default function OverviewTab(props) {
  return (
    <Box paddingX={{ xs: "9px", sm: "15px", md: "1.57vw" }} paddingTop={{ xs: "18px", sm: "29px", md: "3.07vw" }}>
      <Stack direction={"row"} gap={{ xs: "9px", sm: "15px", md: "1.57vw" }} alignItems="flex-end">
        <Box width={{ xs: "26px", sm: "41px", md: "4.29vw" }} height={{ xs: "26px", sm: "41px", md: "4.29vw" }}>
          <img src={icons.logo} width={"100%"} height="100%" alt="logo" />
        </Box>
        <Typography fontWeight={"700"} fontSize={"1.27em"}>
          Design Team
        </Typography>
      </Stack>
    </Box>
  );
}
