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
    mode: "onBlur",
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
          Next
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
