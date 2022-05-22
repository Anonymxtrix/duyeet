import CenteringBox from "components/CenteringBox";
import Page from "components/Page";
import LoginForm from "forms/LoginForm";
import useLogin from "hooks/useLogin";
import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Login: React.FC = () => {
  const { login } = useLogin();

  return (
    <Page title="Login">
      <CenteringBox>
        <Card>
          <CardHeader title="Login" />
          <CardContent>
            <Stack spacing={3}>
              <LoginForm login={login} />
              <Typography variant="body1">
                {/* TODO: Link sign up link to sign up route */}
                Need an account?{" "}
                <Link component={RouterLink} to="/signup">
                  Sign up
                </Link>
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </CenteringBox>
    </Page>
  );
};

export default Login;
