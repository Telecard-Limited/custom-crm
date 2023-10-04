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
  labels: [
    "Angular Team",
    "Larvel",
    "MERN STACK",
    "PHP",
    "Full Stack",
    "FrontEnd",
  ],
  datasets: [
    {
      label: "Project Boards",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
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
      text: "Boards By Completation Status",
    },
  },
};

const PieChart = () => {
  return (
    <Container maxWidth="xl">
      <Paper
        elevation={3}
        sx={{
          mt: 4,
          width: "100%",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Doughnut data={data} options={options} />;
      </Paper>
    </Container>
  );
};

export default PieChart;
