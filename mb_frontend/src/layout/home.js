import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function HomeLayout(props) {
  return (
    <Container disableGutters maxWidth={false} >
      <main>
        <Outlet />
      </main> 
    </Container>
  );
}
