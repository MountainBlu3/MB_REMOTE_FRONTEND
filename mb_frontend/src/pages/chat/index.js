import { Container, Stack } from "@mui/material";
import {sidebars} from "../../components/chat";


const Chat = (props) => {

  return (
    <Stack direction="row">
      <sidebars.Mini_sidebar />
      <sidebars.Message_sidebar />
      <Container sx={{ width: "auto" }}>
        {/* Chat conversations go here */}
      </Container>
    </Stack>
  );
};

export default Chat;
