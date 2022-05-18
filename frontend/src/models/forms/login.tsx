import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const schema = yup.object({
  email: yup
    .string()
    .default("")
    .email("Enter a valid email")
    .required("Email is required"),
});

export const resolver = yupResolver(schema);

export type Values = yup.InferType<typeof schema>;

export const getDefault = () => schema.getDefault();
