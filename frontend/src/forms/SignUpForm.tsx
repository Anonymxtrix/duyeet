import TextField from "forms/components/TextField";
import useSignUp from "hooks/useSignUp";
import { getDefault, resolver } from "models/forms/signUp";
import { useForm, FormProvider } from "react-hook-form";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const SignUpForm: React.FC = () => {
  const { signUp } = useSignUp();
  const methods = useForm({
    defaultValues: getDefault(),
    resolver,
    mode: "onTouched",
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
  } = methods;
  const onSubmit = handleSubmit(signUp);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField
            name="name"
            color="primary"
            variant="filled"
            fullWidth
            id="name"
            label="Name"
            type="text"
          />
          <TextField
            name="email"
            color="primary"
            variant="filled"
            fullWidth
            id="email"
            label="Email"
            type="email"
          />
          <TextField
            name="password"
            color="primary"
            variant="filled"
            fullWidth
            id="password"
            label="Password"
            type="password"
          />
          <TextField
            name="confirmPassword"
            color="primary"
            variant="filled"
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            type="password"
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
