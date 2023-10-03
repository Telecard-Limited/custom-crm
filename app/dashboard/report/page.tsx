"use client";
import Insights from "@/components/reportsComponent/Insights";
import ReportContainer from "@/components/reportsComponent/ReportContainer";
import PieChart from "@/components/reportsComponent/insightsAsPieChart";
import InsightsByCategory from "@/components/reportsComponent/insightsbyAssignTickets";
import DoughnutChart from "@/components/reportsComponent/insightsbyTicketStatus";
import { Button, Container } from "@mui/material";

const ReportPages = () => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#01579b",
        }}
      >
        Generate Report
      </Button>
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        <ReportContainer />
        <Insights />
      </Container>
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",

          justifyContent: "space-around",
        }}
      >
        <DoughnutChart />
        <InsightsByCategory />
      </Container>
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",

          justifyContent: "space-around",
        }}
      >
        <PieChart />
      </Container>
    </>
  );
};

export default ReportPages;
