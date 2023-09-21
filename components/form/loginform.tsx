"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import loginValidation from "../validationSchema/loginshema";
import { styled } from "@mui/material";
import { GlobalStyles } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import MenuItem from "../MenuItems";
import { useRouter } from "next/navigation";
import { Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { EmailRounded } from "@mui/icons-material";
import HttpsIcon from "@mui/icons-material/Https";

export default function Login() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: loginValidation.initialValues,
    validationSchema: loginValidation.loginSchema,
    onSubmit: async (values, actions) => {
      try {
        // Define the data you want to send
        const data = {
          email: values.email,

          password: values.password,
        };
        // Send a POST request using Axios
        const response = await axios.post("/api/login", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // Handle the response data here
        console.log("Response:", response?.data);
        toast.success("User LoggedIn successfully");
        router.refresh();
        router.push("/dashboard");
        // Perform any additional actions or state updates here
      } catch (error) {
        // Handle errors here
        console.error("Error:", error);
        toast.error("Error in logging in user ");
        router.refresh();
        router.push("/signin");
        // Perform error handling, such as displaying error messages
      } finally {
        // Ensure that Formik's form submission actions are called, e.g., to reset the form
        actions.setSubmitting(false);
      }
    },
  });
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <div className="align-middle cursor-pointer bg-blue-950 drop-shadow-sm">
        <MenuItem
          label="Register"
          onClick={() => router?.push("/registeration")}
        />
      </div>
      <Container maxWidth="lg" component="main" sx={{}}>
        <Box sx={{ pl: 10, pr: 10, mt: 5 }}>
          <Typography variant="h4" align="left" color="#2D3748" component="p">
            Welcome Back!
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg" component="main" sx={{ mt: 5 }}>
        <Grid item xs={12}>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
              flexDirection: "column",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  fontWeight={400}
                  fontSize={"24px"}
                  textAlign="start"
                >
                  Email*
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label={"Email"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailRounded sx={{ color: "#2D3748" }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  sx={{ width: "100%" }}
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label={"Password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HttpsIcon sx={{ color: "#2D3748" }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  sx={{ width: "100%" }}
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <div style={{ width: "100%", margin: "auto" }}>
                  <Typography
                    align="right"
                    color="#2D3748"
                    component="p"
                    sx={{ margin: "20px 0px" }}
                  >
                    <Button
                      variant="text"
                      color={"secondary"}
                      sx={{
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        fontWeight: 400,
                        top: -2,
                      }}
                    >
                      Forgot Your Password? Click here to reset
                    </Button>
                    .
                  </Typography>
                </div>
              </Grid>
              <Container maxWidth="lg" component="main" sx={{}}>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "center ",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      pt: 1.2,
                      pb: 1.2,
                      pl: 5,
                      pr: 5,
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      backgroundColor: "#2D3748",
                    }}
                    type="submit"
                  >
                    Sign In
                  </Button>
                </Stack>
              </Container>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
