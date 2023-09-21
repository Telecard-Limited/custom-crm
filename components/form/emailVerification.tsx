"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { GlobalStyles } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import MailIcon from "@mui/icons-material/Mail";
const EmailVerification = () => {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />

      <Container>
        <Container maxWidth="md" component="main" sx={{}}>
          <Grid
            container
            spacing={2}
            sx={{
              pl: 10,
              pr: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12}>
              <Box
                component="image"
                //   onSubmit={formik.handleSubmit}
                sx={{
                  display: "flex",
                  mt: 10,
                  backgroundColor: "#FFFFFF", // White background
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", // Drop shadow
                  borderRadius: "10px",
                }}
              >
                <MailIcon
                  sx={{
                    color: "#2D3748",
                    alignItem: "center",
                    justifyContent: "center",
                    width: "75%",
                    height: "80vh",
                    ml: 7,
                  }}
                  fontSize="large"
                />
              </Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ mt: 4, textAlign: "center" }}
              >
                Please check your email for verification link
              </Typography>
              <br />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default EmailVerification;
