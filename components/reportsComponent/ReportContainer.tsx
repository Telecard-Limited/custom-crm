"use client";
import { Container, Grid, Paper, Typography } from "@mui/material";
const ReportContainer = () => {
  return (
    <>
      <Container maxWidth={"xl"}>
        <Grid
          container
          sx={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Grid item xs={12} md={6} sx={{ mt: 4 }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                width: "80%",
              }}
            >
              <Typography
                sx={{ color: "#172554", fontSize: "17px", fontWeight: 600 }}
              >
                Total Tickets
              </Typography>
              <Typography
                sx={{ color: "#172554", fontSize: "17px", fontWeight: 400 }}
              >
                46
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 4 }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                ml: 5,
                width: "80%",
              }}
            >
              <Typography
                sx={{ color: "#172554", fontSize: "17px", fontWeight: 600 }}
              >
                Completed Tickets
              </Typography>
              <Typography
                sx={{ color: "#172554", fontSize: "17px", fontWeight: 400 }}
              >
                20
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Grid item xs={12} md={6} sx={{ mt: 4 }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                width: "80%",
              }}
            >
              <Typography
                sx={{ color: "#172554", fontSize: "17px", fontWeight: 600 }}
              >
                Incomplete Tickets
              </Typography>
              <Typography
                sx={{ color: "#172554", fontSize: "17px", fontWeight: 400 }}
              >
                26
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 4 }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                ml: 5,
                width: "80%",
              }}
            >
              <Typography
                sx={{ color: "#172554", fontSize: "17px", fontWeight: 600 }}
              >
                Overdue Tickets
              </Typography>
              <Typography
                sx={{ color: "#172554", fontSize: "17px", fontWeight: 400 }}
              >
                2
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ReportContainer;
