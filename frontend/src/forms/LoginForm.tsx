import TextField from "forms/components/TextField";
import { getDefault, resolver, Values } from "models/forms/login";
import { useForm, FormProvider } from "react-hook-form";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface Props {
  login: (values: Values) => Promise<void>;
}

const LoginForm: React.FC<Props> = (props) => {
  const { login } = props;
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
