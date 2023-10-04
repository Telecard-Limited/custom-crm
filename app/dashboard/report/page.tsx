"use client";
import Insights from "@/components/reportsComponent/Insights";
import ReportContainer from "@/components/reportsComponent/ReportContainer";

import InsightsByCategory from "@/components/reportsComponent/insightsbyAssignTickets";

import { Button, Container, Grid } from "@mui/material";
import axios from "axios";
const ReportPages = () => {
  return (
    <>
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <ReportContainer />
      </Container>
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Insights />
        <InsightsByCategory />
      </Container>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Grid
          item
          component={"button"}
          sx={{
            backgroundColor: "#172554",
            width: "95%",
            height: "40px",
            mt: 4,

            color: "white",
            borderRadius: "10px",
          }}
        >
          Generate Report
        </Grid>
      </Grid>
    </>
  );
};

export default ReportPages;
