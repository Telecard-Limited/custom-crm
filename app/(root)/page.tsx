"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import loginValidation from "@/components/validationSchema/loginshema";
import { EmailRounded } from "@mui/icons-material";
import HttpsIcon from "@mui/icons-material/Https";
import Image from "next/image";

import { toast } from "react-hot-toast";
export default function Home() {
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
  const [expanded, setExpanded] = useState("");
  return (
    <>
      <div className="flex flex-col  items-center justify-center w-[100vw] h-[30vh]  bg-blue-950">
        <div className="mt-20">
          <h1 className="text-4xl font-extrabold text-white ">Accord CRM </h1>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between bg-gray-200 w-[100vw] h-screen">
        <div className="flex flex-col">
          <h1 className="font-bold text-3d">
            Boost Sales with Our Cutting-Edge CRM Solution
          </h1>
          <Button
            //@ts-ignore
            onClick={() => setExpanded(!expanded)}
            sx={{
              backgroundColor: "#000 !important",
              width: "30%",
              ml: 12,
              mb: 5,
              color: "#ffff",
              fontWeight: "900",
            }}
          >
            Get Started
          </Button>
        </div>
        <Image
          src="/images/marketflows.png"
          //@ts-ignore
          width={"50%"}
          height={50}
          style={{
            marginRight: "40px",
          }}
        />
      </div>
      {/* sign in form*/}
      {expanded && (
        <div className="flex flex-col items-center justify-center w-[100vw] h-screen bg-gray-200">
          <Container maxWidth="md" component="main" sx={{}}>
            <Box sx={{ mt: 5 }}>
              <Typography
                variant="h4"
                align="center"
                color="#2D3748 !important"
                component="p"
              >
                Welcome To Accord CRM
              </Typography>
            </Box>
          </Container>
          <Container
            maxWidth="md"
            component="main"
            sx={{ mt: 5, alignItems: "center", justifyContent: "center" }}
          >
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
                <Grid
                  container
                  spacing={2}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      label={"Email"}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
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
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
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
                          backgroundColor: "#2D3748 !important",
                        }}
                        type="submit"
                      >
                        Sign In
                      </Button>
                    </Stack>
                  </Container>
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
                          onClick={() => router?.push("/registeration")}
                        >
                          New to Account? Register
                        </Button>
                        .
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
}
