import useLogin from "hooks/useLogin";
import { getDefault, resolver } from "models/forms/login";
import { useForm, Controller } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const LoginForm: React.FC = () => {
  const { login } = useLogin();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: getDefault(),
    resolver,
    mode: "onTouched",
  });

  const onSubmit = handleSubmit(login);

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={3}>
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
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={formState.isSubmitting}
        >
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
