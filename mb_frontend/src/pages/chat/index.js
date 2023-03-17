import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ChatAppBar from "../../components/chat/appBar/index";
import { icons } from "../../images/chat/images";
const Chat = (props) => {
  const dpStyles = {
    border: "2px solid #14BCDA",
    borderRadius: "50%",
    height: "40px",
    width: "40px",
  };
  const onlineStack = {
    paddingBottom: "10px",
    "::-webkit-scrollbar": {
      display: "none",
      height: " 3px",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#ffffff40",
      borderRadius: "10px",
    },
  };
  const contactListStyles = {
    paddingRight: "15px",
    maxHeight: "59.5vh",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      width: " 3px",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#ffffff40",
      borderRadius: "10px",
    },
  };
  return (
    <Stack direction="row">
      <Stack
        alignItems={"center"}
        gap={7}
        sx={{
          background: "linear-gradient(180deg, #02282F 26.76%, rgba(8, 7, 54, 0.9) 75.3%, #131313 91.61%)",
          height: "max-content",
          color: "white",
          padding: "32px 8px",
          overflowY: "auto",
          minHeight: "100vh",
        }}
      >
        <Link to="">
          <img height={50} width={50} src={icons.logo} alt="" />
        </Link>
        <Link to="">
          <img title="Chats" style={{ opacity: ".5" }} height={25} width={25} src={icons.chats} alt="" />
        </Link>
        <Link to="./calls">
          <img title="Calls" style={{ opacity: ".5" }} height={25} width={25} src={icons.calls} alt="" />
        </Link>
        <Link to="./settings">
          <img title="Settings" style={{ opacity: ".5" }} height={25} width={25} src={icons.settings} alt="" />
        </Link>
        <Link to="">
          <img title="Log out" style={{ opacity: ".5" }} height={25} width={25} src={icons.exit} alt="" />
        </Link>
      </Stack>
      <Stack
        component={"div"}
        p={1}
        fontSize="secondary"
        gap={2}
        maxWidth={280}
        sx={{
          width: "35%",
          background: "#1A2424",
          padding: "32px 16px 0px 16px",
        }}
      >
        <Typography color="primary" component="h1" variant="h5" fontWeight="500" sx={{ marginInline: "5px" }}>
          Messages
        </Typography>

        <TextField
          label="Search"
          size="small"
          sx={{
            margin: "5px",
            color: "white !important",
            "& label": {
              color: "#ffffff95",
            },
            ".css-122uw4s-MuiInputBase-root-MuiOutlinedInput-root ": {
              borderRadius: "10px !important",
            },
            " & .css-1fm3ajf-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
            " .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              background: "#14BCDA70",
            },
            "& input": {
              color: "#ffffff",
              position: "relative",
              zIndex: "3",
            },
          }}
        />
        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ color: "#fff", fontWeight: "500" }}>Online</Typography>
          <Typography sx={{ color: "#fff", fontWeight: "500" }}>All</Typography>
        </Stack>
        <Stack
          sx={onlineStack}
          gap={0.5}
          overflow="auto"
          scr
          maxWidth="100%"
          direction="row"
          justifyContent="space-between"
        >
          <img src={icons.dp} alt="" style={dpStyles} />
          <img src={icons.dp} alt="" style={dpStyles} />
          <img src={icons.dp} alt="" style={dpStyles} />
          <img src={icons.dp} alt="" style={dpStyles} />
          <img src={icons.dp} alt="" style={dpStyles} />
        </Stack>
        <Stack gap={2.5} sx={contactListStyles}>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
          <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
            <Stack gap={2} direction="row" alignItems="center">
              <img src={icons.dp} alt="" style={dpStyles} />
              <Box>
                <Typography color="#fff" fontSize={14} lineHeight={1.1} variant="h6">
                  Wisdom Adele
                </Typography>
                <Typography fontSize={14} color="#ffffff90" lineHeight={1.1} variant="body2">
                  We outside
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{ justifySelf: "stretch" }}
              alignSelf="start"
              lineHeight={2}
              color="#14BCDA"
              variant="h6"
              fontSize={12}
            >
              20:20
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Container disableGutters maxWidth={false}>
        <ChatAppBar />
        {/* Chat conversations go here */}
      </Container>
    </Stack>
  );
};

export default Chat;
