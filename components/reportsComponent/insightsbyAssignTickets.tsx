import { Container, Paper } from "@mui/material";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
//@ts-ignore
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Assign Tickets",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: false,
      position: "left" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = [
  "Backend",
  "Team Leads",
  "Frontend",
  "Designer",
  "Brand Designer",
  "Intern",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const InsightsByCategory = () => {
  return (
    <Container maxWidth={"xl"}>
      <Paper elevation={3} sx={{ mt: 4 }}>
        <Line options={options} data={data} />;
      </Paper>
    </Container>
  );
};

export default InsightsByCategory;
