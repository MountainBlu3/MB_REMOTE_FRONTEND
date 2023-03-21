import { Stack } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { icons } from "../../images/chat/images";

 export const Mini_sidebar = () => {
  return (
    <Stack
      alignItems={"center"}
      gap={7}
      sx={{
        background:
          "linear-gradient(180deg, #02282F 26.76%, rgba(8, 7, 54, 0.9) 75.3%, #131313 91.61%)",
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
        <img
          title="Chats"
          style={{ opacity: ".5" }}
          height={25}
          width={25}
          src={icons.chats}
          alt=""
        />
      </Link>
      <Link to="./calls">
        <img
          title="Calls"
          style={{ opacity: ".5" }}
          height={25}
          width={25}
          src={icons.calls}
          alt=""
        />
      </Link>
      <Link to="./settings">
        <img
          title="Settings"
          style={{ opacity: ".5" }}
          height={25}
          width={25}
          src={icons.settings}
          alt=""
        />
      </Link>
      <Link to="">
        <img
          title="Log out"
          style={{ opacity: ".5" }}
          height={25}
          width={25}
          src={icons.exit}
          alt=""
        />
      </Link>
    </Stack>
  );
}
