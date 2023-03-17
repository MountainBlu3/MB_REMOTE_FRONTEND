import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useState } from "react";

import FilesTab from "./tabItems/files";
import LinksTab from "./tabItems/links";
import MediaTab from "./tabItems/media";
import OverviewTab from "./tabItems/overview";
import ParticipantsTab from "./tabItems/participants";

import overviewIcon from "../../../images/chat/tabs/overview.png";
import participantsIcon from "../../../images/chat/tabs/participants.png";
import mediaIcon from "../../../images/chat/tabs/media.png";
import filesIcon from "../../../images/chat/tabs/files.png";
import linksIcon from "../../../images/chat/tabs/links.png";

const tabItems = [
  { title: "Overview", icon: overviewIcon, component: OverviewTab },
  { title: "Participants", icon: participantsIcon, component: ParticipantsTab },
  { title: "Media", icon: mediaIcon, component: MediaTab },
  { title: "Files", icon: filesIcon, component: FilesTab },
  { title: "Links", icon: linksIcon, component: LinksTab },
];

export default function ChatMenu() {
  const [active, setActive] = useState(0);

  const handleChange = (event, newValue) => {
    setActive(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "rgba(42, 51, 50, 0.67)",
        display: "flex",
        width: { xs: "236px", sm: "377px", md: "39.36vw" },
        minHeight: { xs: "287px", sm: "458px", md: "37.86vw" },
      }}
    >
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={active}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { background: "transparent", width: 0 },
        }}
        sx={{
          borderRight: 1,
          paddingTop: { xs: "27px", sm: "44px", md: "4.57vw" },
          width: { xs: "83px", sm: "133px", md: "13.86vw" },
          borderColor: "divider",
          "& .MuiTab-root.Mui-selected": {
            background: "rgba(26, 36, 35, 0.92)",
            borderRadius: { xs: "5px", sm: "8px", md: "0.79vw" },
            color: "white",
          },
        }}
      >
        {tabItems.map((item) => (
          <Tab
            sx={{
              justifyContent: "flex-start",
              paddingY: "1px",
              color: "white",
              minHeight: { xs: "22px", sm: "35px", md: "3.64vw" },
              marginTop: { xs: "10px", sm: "16px", md: "1.71vw" },
            }}
            style={{ marginTop: 0 }}
            icon={
              <Box width={{ xs: "14px", sm: "22px", md: "2.29vw" }} height={{ xs: "14px", sm: "22px", md: "2.29vw" }}>
                <img src={item.icon} alt="tab_icons" width="100%" height={"100%"} />
              </Box>
            }
            iconPosition="start"
            label={item.title}
          />
        ))}
      </Tabs>
      <Box bgcolor="#1A2423" color="white" width={{ xs: "153px", sm: "244px", md: "25.43vw" }}>
        {tabItems[active] ? tabItems[active].component(tabItems[active].title) : <Typography> No item</Typography>}
      </Box>
    </Box>
  );
}
