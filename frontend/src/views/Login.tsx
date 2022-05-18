import Page from "../components/Page";
import LoginForm from "../forms/LoginForm";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Login: React.FC = () => {
  return (
    <Page title="Login">
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Card>
          <CardHeader title="Login" />
          <CardContent>
            <LoginForm />
            <Typography variant="body1">
              {/* TODO: Link sign up link to sign up route */}
              Need an account? <Link href="#">Sign up</Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Page>
  );
};

export default Login;
