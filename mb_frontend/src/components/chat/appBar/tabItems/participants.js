import {
  Avatar,
  Box,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

import avatarImage from "../../../../images/chat/avatar_johnson.png";

const participantsList = [
  {
    img: avatarImage,
    name: "Johnson",
    isAdmin: true,
  },
  {
    img: avatarImage,
    name: "Johnson",
    isAdmin: false,
  },
  {
    img: avatarImage,
    name: "Johnson",
    isAdmin: false,
  },
];

export default function ParticipantsTab(props) {
  return (
    <Box px={{ xs: "3px", sm: "5px", md: "0.50vw" }}>
      <Box
        py={{ xs: "1.40vw", md: "1.04vw" }}
        px={{ xs: "3.00vw", md: "1.74vw" }}
        marginTop={{ xs: "9px", sm: "14px", md: "1.50vw" }}
        borderRadius={{ xs: "9px", sm: "14px", md: "1.43vw" }}
        bgcolor="rgba(22, 106, 118, 0.29)"
        boxShadow={{ xs: "0px 10px 10px rgba(0, 0, 0, 0.25)" }}
      >
        <TextField
          disableUnderline
          placeholder="Search"
          fullWidth
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: { color: "white" },
            startAdornment: (
              <InputAdornment position="start">
                <Box>
                  <AiOutlineSearch color="white" />
                </Box>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <List>
        {participantsList.map((item) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar
                sx={{
                  width: { xs: "26px", sm: "41px", md: "4.29vw" },
                  height: { xs: "26px", sm: "41px", md: "4.29vw" },
                }}
                src={item.img}
                alt="user_avatar"
              />
            </ListItemAvatar>
            <ListItemText
              sx={{ marginLeft: { xs: "8px", sm: "13px", md: "1.36vw" } }}
              primary={
                <Typography fontWeight={"700"} fontSize={"1.11em"}>
                  {item.name}
                </Typography>
              }
              secondary={
                item.isAdmin ? (
                  <Typography fontSize={"1.11em"} textAlign={"right"}>
                    Admin
                  </Typography>
                ) : null
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
