import * as React from "react";
import AppBar from "../components/AppBar";
import StickyFooter from "../components/StickyFooter";
import Container from "@mui/material/Container";

function Dashboard() {
  return (
    <React.Fragment>
      <AppBar />
      <main className="container">
        <Container maxWidth="xl"></Container>
      </main>

      <StickyFooter />
    </React.Fragment>
  );
}

export default Dashboard;
