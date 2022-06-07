import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useAuthContext } from "@asgardeo/auth-react";
import { createTheme, Grid, Link } from "@mui/material";
const logo: any = require("../util/logo.png");

const theme = createTheme({
  spacing: 4,
});

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { state, signIn, signOut } = useAuthContext();

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAuthentication = () => {
    {
      state.isAuthenticated ? signOut() : signIn();
    }
  };

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ background: "#ff6f0f", height: 80 }}>
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item xs={0.2}></Grid>

            <Grid item xs={1.25}>
              <Box sx={{ p: theme.spacing(2) }}>
                <a href="http://localhost:3000/">
                  <img alt="WSO2" src={logo} width="130%" height="130%"></img>
                </a>
              </Box>
            </Grid>

            <Grid item xs={0.6}></Grid>

            <Grid item xs={5}>
              <Box
                sx={{
                  p: theme.spacing(6),
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom={false}
                  noWrap
                  sx={{ align: "center" }}
                >
                  U2/WUM/Hotfix Statistics Dashboard
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={4} display="flex" justifyContent="flex-end">
              <Box
                sx={{
                  p: theme.spacing(7),
                }}
              >
                <Typography>
                  Welcome {state.displayName === null ? "" : state.username} !
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={0.5}>
              <Box sx={{ flexGrow: 0, p: theme.spacing(5) }}>
                <Tooltip title="Accounts">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Account" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={"account"}>
                    <Link href="profile" underline="none" color="inherit">
                      <Typography textAlign="center">Account</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem key={"authenticate"} onClick={handleAuthentication}>
                    <div>
                      {state.isAuthenticated ? (
                        <Typography textAlign="center">Logout</Typography>
                      ) : (
                        <Typography textAlign="center">Login</Typography>
                      )}
                    </div>
                  </MenuItem>
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
export default ResponsiveAppBar;
