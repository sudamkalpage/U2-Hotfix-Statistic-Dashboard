import * as React from "react";
import Container from "@mui/material/Container";
import { useAuthContext } from "@asgardeo/auth-react";
import {
  Box,
  Button,
  createTheme,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

const theme = createTheme({
  spacing: 4,
});

function LandingPage() {
  const { signIn } = useAuthContext();

  return (
    <React.Fragment>
      <main className="container">
        <Container maxWidth="xs">
          <Paper
            elevation={6}
            sx={{
              minHeight: "50vh",
              minWidth: "37vw",
              mt: theme.spacing(18),
              mb: theme.spacing(18),
              p: theme.spacing(8),
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                noWrap
                sx={{ fontWeight: "bold" }}
              >
                U2/WUM/Hotfix Statistics Dashboard
              </Typography>

              <Divider variant="middle" />

              <Typography
                variant="body2"
                component="div"
                gutterBottom
                sx={{ mt: theme.spacing(4) }}
              >
                Hello Welcome! This Dashboard allows to view data from WSO2
                update manager server statistically with filtering effect and
                graphical charts!
              </Typography>

              <Typography
                variant="body2"
                component="div"
                gutterBottom
                sx={{ mt: theme.spacing(6) }}
              >
                First of all, you'll need to log in using WSO2 google
                credentials!
              </Typography>

              <Box
                component="div"
                sx={{
                  pl: "11.5vw",
                  pr: "11.5vw",
                }}
              >
                <Button
                  onClick={() => signIn()}
                  sx={{ mt: theme.spacing(6), display: "block" }}
                  size="large"
                  variant="contained"
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default LandingPage;
