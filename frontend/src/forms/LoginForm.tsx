import TextField from "forms/components/TextField";
import useLogin from "hooks/useLogin";
import { getDefault, resolver } from "models/forms/login";
import { useForm, FormProvider } from "react-hook-form";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const LoginForm: React.FC = () => {
  const { login } = useLogin();
  const methods = useForm({
    defaultValues: getDefault(),
    resolver,
    mode: "onTouched",
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
  } = methods;
  const onSubmit = handleSubmit(login);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <Stack spacing={3}>
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
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
