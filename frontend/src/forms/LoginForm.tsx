import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const loginFormSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: loginFormSchema,
    onSubmit: (values) => {
      // TODO: Connect form to login API
      return Promise.resolve();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    >
      <Stack spacing={3}>
        <TextField
          color="primary"
          variant="filled"
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={formik.isSubmitting}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
