import { Container, Paper } from "@mui/material";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
//@ts-ignore
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Assign Ticket ",
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
      <Paper elevation={3} sx={{ mt: -7 }}>
        <Bar options={options} data={data} />
      </Paper>
    </Container>
  );
};

export default InsightsByCategory;
