import { AppBar, Avatar, Box, IconButton, Popover, Stack, Typography } from "@mui/material";

import { HiOutlineSearch, HiOutlineVideoCamera } from "react-icons/hi";
import { BsTelephone, BsThreeDotsVertical } from "react-icons/bs";
import { icons } from "../../../images/chat/images";
import { useState } from "react";
import ChatMenu from "./chatMenu";

export default function ChatAppBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  return (
    <AppBar
      elevation={0}
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: { xs: "5px", sm: "8px", md: "0.86vw" },
        paddingRight: { xs: "2px", sm: "3px", md: "0.29vw" },
        paddingLeft: { xs: "13px", sm: "21px", md: "2.14vw" },
        background: "linear-gradient(180deg, #166A76 0%, rgba(22, 106, 118, 0) 100%)",
      }}
    >
      <Stack direction={"row"} justifyContent="space-between">
        <Stack direction={"row"} gap={{ xs: "6px", sm: "9px", md: "0.93vw" }} alignItems="center">
          <Box width={{ xs: "26px", sm: "41px", md: "4.29vw" }} height={{ xs: "26px", sm: "41px", md: "4.29vw" }}>
            <img src={icons.logo} width={"100%"} height="100%" alt="logo" />
          </Box>
          <Typography fontWeight={"700"} color="primary" fontSize={"1.27em"}>
            Design Team
          </Typography>
        </Stack>
        <Stack gap={{ xs: "10px", sm: "16px", md: "1.64vw" }} alignItems="center" direction={"row"}>
          <IconButton sx={{ padding: 0 }}>
            <HiOutlineSearch />
          </IconButton>
          <IconButton sx={{ padding: 0 }}>
            <HiOutlineVideoCamera />
          </IconButton>
          <IconButton sx={{ padding: 0 }}>
            <BsTelephone />
          </IconButton>
          <Avatar sx={{ background: "#1A2423", padding: 0 }} onClick={(e) => setAnchorEl(e.currentTarget)}>
            <BsThreeDotsVertical />
          </Avatar>

          <Popover
            open={open}
            PaperProps={{ sx: { borderRadius: { xs: "14px", sm: "22px", md: "2.29vw", backgroundColor: "#1A2423" } } }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
          >
            <ChatMenu />
          </Popover>
        </Stack>
      </Stack>
    </AppBar>
  );
}
