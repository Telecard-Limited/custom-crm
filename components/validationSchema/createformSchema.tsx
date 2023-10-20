"use client";

import * as yup from "yup";
const initialValues = {
  title: "",
  fields: [{ label: "", type: "" }], // Initialize fields as an array of objects
};

const createformSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  fields: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required("Label is required"),
        type: yup.string().required("Type is required"),
      })
    )
    .required("At least one field is required"),
});

const formSchema = { initialValues, createformSchema };
export default formSchema;
