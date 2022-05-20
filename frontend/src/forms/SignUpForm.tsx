import useSignUp from "hooks/useSignUp";
import { getDefault, resolver } from "models/forms/signUp";
import { useForm, Controller } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const SignUpForm: React.FC = () => {
  const { signUp } = useSignUp();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: getDefault(),
    resolver,
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(signUp);

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { isDirty, error } }) => (
            <TextField
              color="primary"
              variant="filled"
              fullWidth
              id="name"
              label="Name"
              type="text"
              {...field}
              error={isDirty && Boolean(error)}
              helperText={isDirty && error && error.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { isDirty, error } }) => (
            <TextField
              color="primary"
              variant="filled"
              fullWidth
              id="email"
              label="Email"
              type="email"
              {...field}
              error={isDirty && Boolean(error)}
              helperText={isDirty && error && error.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { isDirty, error } }) => (
            <TextField
              color="primary"
              variant="filled"
              fullWidth
              id="password"
              label="Password"
              type="password"
              {...field}
              error={isDirty && Boolean(error)}
              helperText={isDirty && error && error.message}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState: { isDirty, error } }) => (
            <TextField
              color="primary"
              variant="filled"
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              {...field}
              error={isDirty && Boolean(error)}
              helperText={isDirty && error && error.message}
            />
          )}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={formState.isSubmitting}
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
