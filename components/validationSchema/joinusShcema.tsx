"use client";
import * as yup from "yup";

const joinusSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),

  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be of minimum 3 characters length")
    .max(35, "Name should be of maximum 35 characters length"),
  country: yup.string().required("Country is Required"),
  phoneNumber: yup.number().required("Phone number is Required"),
});
const initialValues = {
  email: "",
  password: "",
  name: "",
  country: "",
  phoneNumber: "",
};
const joinusValidation = { initialValues, joinusSchema };
export default joinusValidation;
