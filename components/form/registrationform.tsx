"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import axios, { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import joinusValidation from "../validationSchema/joinusShcema";
// import { styled } from "@mui/material";
import { GlobalStyles } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import MenuItem from "../MenuItems";
import { useRouter } from "next/navigation";

export default function JoinUs() {
  const [Loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: joinusValidation.initialValues,
    validationSchema: joinusValidation.joinusSchema,
    onSubmit: async (values, actions) => {
      try {
        // Define the data you want to send
        const data = {
          email: values.email,
          name: values.name,
          password: values.password,
          phoneNumber: values.phoneNumber,
          country: values.country,
        };
        // Send a POST request using Axios
        const response = await axios.post("/api/register", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // Handle the response data here
        console.log("Response:", response?.data);
        toast.success("User onboarded succesfully");
        router.refresh();
        router.push("/emaiverification");
        // Perform any additional actions or state updates here
      } catch (error) {
        // Handle errors here
        console.error("Error:", error);
        toast.error("Error in user onboarding");
        router.refresh();
        router.push("/registeration");
        // Perform error handling, such as displaying error messages
      } finally {
        // Ensure that Formik's form submission actions are called, e.g., to reset the form
        actions.setSubmitting(false);
      }
    },
    // onSubmit: async (data) => {
    //   console.log("dataa", data, "sending data to backend");

    //   try {
    //     const response = await axios.post("/api/register", data, {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     // Pass formik.values as data
    //     console.log("response from backend", response);
    //     if (response.data) {
    //       toast.success("Registered");
    //       console.log("front response", response.data);
    //       // router?.push("/emailVerification");
    //     }
    //   } catch (e: any) {
    //     toast.error("Error in Registering user", e);
    //     // router.push("/registeration");
    //   }
    // },
  });

  const router = useRouter();
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <div className="align-middle cursor-pointer bg-blue-950 drop-shadow-sm">
        <MenuItem label="Login" onClick={() => router?.push("/signin")} />
      </div>
      <Container maxWidth="md" component="main" sx={{}}>
        <Grid container spacing={2} sx={{ pl: 10, pr: 10 }}>
          <Grid item xs={12}>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                display: "flex",
                mt: 10,
                backgroundColor: "#FFFFFF", // White background
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", // Drop shadow
                borderRadius: "10px",
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{ alignItems: "center", justifyContent: "center", pl: 10 }}
              >
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    align="left"
                    color="#2D3748"
                    component="p"
                  >
                    Personal details
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    name="name"
                    label={"Name"}
                    variant="outlined"
                    sx={{ width: "80%", mt: 3, mb: 3 }}
                  />
                  <Grid item xs={12}>
                    <TextField
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      name="email"
                      label={"Email"}
                      variant="outlined"
                      sx={{ width: "80%", mt: 3, mb: 3 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phoneNumber &&
                        Boolean(formik.errors.phoneNumber)
                      }
                      helperText={
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                      }
                      name="phoneNumber"
                      label={"PhoneNumber"}
                      variant="outlined"
                      sx={{ width: "80%", mt: 3, mb: 3 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      name="password"
                      label={"Password"}
                      variant="outlined"
                      sx={{ width: "80%", mt: 3, mb: 3 }}
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.country && Boolean(formik.errors.country)
                      }
                      helperText={
                        formik.touched.country && formik.errors.country
                      }
                      name="country"
                      label={"Country"}
                      variant="outlined"
                      sx={{ width: "80%", mt: 3, mb: 3 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        pt: 1.2,
                        pb: 1.2,
                        pl: 5,
                        pr: 5,
                        textTransform: "uppercase",
                        width: "80%",
                        backgroundColor: "#2D3748",
                      }}
                      type="submit"
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
