import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://wso2.com/">
        WSO2, inc
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "12vh",
      }}
    >
      <CssBaseline />
      {/* <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Pin a footer to the bottom of the viewport."}
          {"The footer will move as the main element of the page grows."}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container> */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Copyright />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" color="text.secondary">
                Cookie Policy
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" color="text.secondary">
                <Link color="inherit" href="mailto:sudam@wso2.com">
                  Contact
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" color="text.secondary">
                <Link color="inherit" href="mailto:sudam@wso2.com">
                  Report a problem
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
