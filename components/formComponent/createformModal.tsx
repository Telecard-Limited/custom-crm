"use client";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Modal,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import formSchema from "../validationSchema/createformSchema";
import { useFormik } from "formik";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #172554 ",
  boxShadow: 24,
  p: 4,
  mt: 4,
  maxHeight: "80vh", // Set maximum height to enable scrolling,
  overflowY: "scroll",
};

const CreateFormModal = () => {
  const [open, setOpen] = React.useState("false");
  const handleOpen = () => setOpen("true");

  const handleClose = () => {
    //@ts-ignore
    setOpen(!open);
  };
  const formik = useFormik({
    initialValues: formSchema.initialValues,
    validationSchema: formSchema.createformSchema,
    onSubmit: async (values, actions) => {
      try {
        const data = {
          title: values.title,
          fields: values.fields,
        };

        const response = await axios.post("/api/forms", data, {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        });
        console.log(response?.data);
        console.log(response?.request);
        console.log("Response from backend", response);

        if (response.status === 200) {
          toast.success("Form created successfully");
        } else {
          toast.error("Something went wrong");
        }
      } catch (e) {
        console.error("Error:", e);
        toast.error("Error in creating forms");
      } finally {
        // Ensure that Formik's form submission actions are called, e.g., to reset the form
        actions.setSubmitting(false);
      }
    },
  });
  // Function to dynamically generate field names based on the selected input type

  // Function to render the selected input component

  return (
    <>
      <Modal
        //@ts-ignore
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <Button
              endIcon={<Close />}
              sx={{
                ml: 35,
                alignItems: "flex-end",
                justifyContent: "flex-end",
                top: -20,
              }}
              onClick={handleClose}
            />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign={"center"}
            >
              Create Form
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, color: "#172554 " }}
            >
              Title
            </Typography>
            <Grid item xs={12}>
              <TextField
                name="title"
                sx={{ width: "100%" }}
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>

            {formik.values.fields.map((field: any, index: number) => (
              <div key={index}>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, color: "#172554 " }}
                >
                  Label
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    name={`fields[${index}].label`}
                    sx={{ width: "100%" }}
                    value={field.label}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.fields &&
                      //@ts-ignore
                      Boolean(formik.errors.fields?.[index]?.label)
                    }
                    helperText={
                      formik.touched.fields &&
                      //@ts-ignore

                      formik.errors.fields?.[index]?.label
                    }
                  />
                </Grid>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, color: "#172554 " }}
                >
                  Type
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    name={`fields[${index}].type`}
                    select
                    sx={{ width: "100%" }}
                    value={field?.type}
                    error={
                      formik.touched.fields &&
                      //@ts-ignore
                      Boolean(formik.errors.fields?.[index]?.type)
                    }
                    helperText={
                      formik.touched.fields &&
                      //@ts-ignore
                      formik.errors.fields?.[index]?.type
                    }
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="text">Text Field</MenuItem>
                    <MenuItem value="checkbox">Check box</MenuItem>
                    <MenuItem value="radiobutton">Radio Button</MenuItem>
                    <MenuItem value="number">Number Field</MenuItem>
                    <MenuItem value="password">Password Field</MenuItem>
                    <MenuItem value="email">Email Field</MenuItem>
                    <MenuItem value="button">Button</MenuItem>
                  </TextField>
                </Grid>
              </div>
            ))}
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                type="button"
                onClick={() =>
                  formik.setValues({
                    ...formik.values,
                    fields: [...formik.values.fields, { label: "", type: "" }],
                  })
                }
                sx={{ mt: 4, alignItems: "center", justifyContent: "center" }}
              >
                Add Field
              </Button>

              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 4, alignItems: "center", justifyContent: "center" }}
              >
                Add Data
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CreateFormModal;
