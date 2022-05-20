import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const schema = yup.object({
  name: yup.string().default("").required("Name is required"),
  email: yup
    .string()
    .default("")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .default("")
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .default("")
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const resolver = yupResolver(schema);

export type Values = yup.InferType<typeof schema>;

export const getDefault = () => schema.getDefault();
