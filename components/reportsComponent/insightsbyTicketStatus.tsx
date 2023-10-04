import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartItem,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Container, Paper } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Upcoming", "Unscheduled"],
  datasets: [
    {
      label: "ScheduledData",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Tickets by completion status",
    },
  },
};

const DoughnutChart = () => {
  return (
    <Container maxWidth="xl">
      <Paper elevation={3} sx={{ width: "80%" }}>
        <Doughnut data={data} options={options} />;
      </Paper>
    </Container>
  );
};

export default DoughnutChart;
