import * as React from "react";
import AppBar from "../components/AppBar";
import StickyFooter from "../components/StickyFooter";
import ReactDataGrid from "../components/DataGrid/ReactDataFilter";
import RechartGraph from "../components/FullGraph/RechartGraph";
import SelectBoxYear from "../components/FullGraph/SelectBoxYear";
import SelectBoxMonth from "../components/FullGraph/SelectBoxMonth";
import SelectBoxYearf from "../components/FilteredGraph/SelectBoxYear";
import SelectBoxMonthf from "../components/FilteredGraph/SelectBoxMonth";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";
// import { useDataStore } from "../store/DataStore";
// import { Button } from "@mui/material";
// import axios from "axios";
import * as CONSTANTS from "../constants/constants";
// import * as TOKEN from "../constants/token";
// import { toast } from "react-toastify";
import Login from "../components/Login";
import { useAuthContext } from "@asgardeo/auth-react";

const theme = createTheme({
  spacing: 4,
});

function Dashboard() {
  const [month, setMonth] = React.useState(5);
  const [year, setYear] = React.useState(3);
  const [month2, setMonth2] = React.useState(5);
  const [year2, setYear2] = React.useState(3);
  const [isFetched, setIsFetched] = React.useState(false);
  // const setData = useDataStore((state) => state.setData);

  React.useEffect(() => {
    console.log("month", month);
    console.log(CONSTANTS.URL);
  }, [month]);
  React.useEffect(() => {
    console.log("year", year);
  }, [year]);

  React.useEffect(() => {
    console.log(isFetched);
  }, [isFetched]);

  React.useEffect(() => {
    console.log(state, "state");
  }, []);

  const { state } = useAuthContext();

  return (
    <React.Fragment>
      <AppBar />

      {state.isAuthenticated ? (
        <main className="container">
          <Container maxWidth="xl">
            <Grid container spacing={theme.spacing(2)}>
              {/* <Button
                onClick={() => {
                  axios
                    .get(CONSTANTS.URL, {
                      params: {
                        ID: 12345,
                      },
                      headers: {
                        Authorization: `Bearer ${TOKEN.TOKEN}`,
                      },
                    })
                    .then(function (response) {
                      toast.success("Successfully Data fetched form Backend", {
                        position: toast.POSITION.TOP_RIGHT,
                      });
                      console.log(response.data);
                      setData(response.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                      toast.success(error, {
                        position: toast.POSITION.TOP_RIGHT,
                      });
                    });
                }}
              >
                Load Data
              </Button> */}

              <Grid item xs={6}>
                {/* <Box
                component="div"
                sx={{
                  m: theme.spacing(2),
                  p: theme.spacing(2),
                  width: "100%",
                  height: 250,
                  textAlign: "center",
                  color: "secondary.main",
                  // bgcolor: "warning.main",
                  border: 1,
                  borderRadius: "8px",
                  borderColor: "primary.main",
                }}
              >
                <Grid container spacing={theme.spacing(2)}>
                  <Grid item xs={8}>
                    {isFetched === true ? (
                      <RechartGraph month={month} year={year} />
                    ) : (
                      <>Loading</>
                    )}
                  </Grid>
                  <Grid item xs={4}>
                    <Box
                    sx={{
                      m:2 
                    }}
                    
                  >
                    <Stack spacing={theme.spacing(2)}>
                    <SelectBoxYear handleSelection={setYear} year={year}  />
                    <SelectBoxMonth handleSelection={setMonth} month={month} />
                    </Stack>
                  </Box>
                  </Grid>
                </Grid>
              </Box> */}
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="div"
                  sx={{
                    m: theme.spacing(2),
                    width: "100%",
                    textAlign: "center",
                    color: "secondary.main",
                    border: 1,
                    borderRadius: "8px",
                    borderColor: "primary.main",
                    minHeight: "65vh",
                  }}
                >
                  <ReactDataGrid setIsFetched={setIsFetched} />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  component="div"
                  sx={{
                    m: theme.spacing(2),
                    p: theme.spacing(2),
                    width: "100%",
                    height: 250,
                    textAlign: "center",
                    color: "secondary.main",
                    // bgcolor: "warning.main",
                    border: 1,
                    borderRadius: "8px",
                    borderColor: "primary.main",
                  }}
                >
                  <Grid container spacing={theme.spacing(2)}>
                    <Grid item xs={8}>
                      {isFetched === true ? (
                        <RechartGraph month={month} year={year} />
                      ) : (
                        <>Loading</>
                      )}
                    </Grid>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          m: theme.spacing(2),
                        }}
                      >
                        <Stack spacing={theme.spacing(2)}>
                          <SelectBoxYear
                            handleSelection={setYear}
                            year={year}
                          />
                          <SelectBoxMonth
                            handleSelection={setMonth}
                            month={month}
                          />
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  component="div"
                  sx={{
                    m: theme.spacing(2),
                    p: theme.spacing(2),
                    width: "100%",
                    height: 250,
                    textAlign: "center",
                    color: "secondary.main",
                    // bgcolor: "warning.main",
                    border: 1,
                    borderRadius: "8px",
                    borderColor: "primary.main",
                  }}
                >
                  <Grid container spacing={theme.spacing(2)}>
                    <Grid item xs={8}>
                      {isFetched === true ? (
                        <RechartGraph month={month2} year={year2} />
                      ) : (
                        <>Loading</>
                      )}
                    </Grid>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          m: theme.spacing(2),
                        }}
                      >
                        <Stack spacing={theme.spacing(2)}>
                          <SelectBoxYearf
                            handleSelection={setYear2}
                            year={year}
                          />
                          <SelectBoxMonthf
                            handleSelection={setMonth2}
                            month={month}
                          />
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </main>
      ) : (
        <Login />
      )}

      <StickyFooter />
    </React.Fragment>
  );
}

export default Dashboard;
