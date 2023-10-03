"use client";

import { AppBar, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
const Appbar = () => {
  const router = useRouter();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        mb: 0,
        boxShadow:
          "0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 4%)",
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          textAlign: "left",
          mt: 4,
          mb: 4,
          cursor: "pointer",
        }}
      >
        <Stack
          gap={4}
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
          }}
        >
          <img
            src="/images/dashboardicon.png"
            style={{
              width: "30px",
            }}
            alt="contacticon"
          />
          <Typography
            sx={{ color: "#172554", fontSize: "17px", fontWeight: 600 }}
          >
            Dashboard
          </Typography>
          <img
            src="/images/reporticons.svg"
            style={{
              width: "30px",
            }}
            alt="contacticon"
          />
          <Typography
            sx={{ color: "#172554", fontSize: "17px", fontWeight: 600 }}
          >
            Reports
          </Typography>

          <img
            src="/images/contacticons.svg"
            style={{
              width: "30px",
            }}
            alt="contacticon"
          />
          <Typography
            sx={{ color: "#172554", fontSize: "17px", fontWeight: 600 }}
          >
            Contacts
          </Typography>

          <img
            src="/images/boardicons.svg"
            style={{
              width: "30px",
            }}
            alt="contacticon"
          />
          <Typography
            sx={{ color: "#172554", fontSize: "17px", fontWeight: 600 }}
          >
            Boards
          </Typography>

          <img
            src="/images/profileicon.svg"
            style={{
              width: "30px",
            }}
            alt="contacticon"
          />
          <Typography
            sx={{ color: "#172554", fontSize: "17px", fontWeight: 600 }}
          >
            Profile
          </Typography>
          <img
            src="/images/helpicon.svg"
            style={{
              width: "30px",
            }}
            alt="contacticon"
          />
          <Typography
            sx={{ color: "#172554", fontSize: "17px", fontWeight: 600 }}
          >
            Help Center
          </Typography>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Appbar;
