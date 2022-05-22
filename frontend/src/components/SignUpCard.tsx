import SignUpForm from "forms/SignUpForm";
import { Values } from "models/forms/signUp";
import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface Props {
  signUp: (values: Values) => Promise<void>;
}

const SignUpCard: React.FC<Props> = (props) => {
  const { signUp } = props;

  return (
    <Card>
      <CardHeader title="Sign Up" />
      <CardContent>
        <Stack spacing={3}>
          <SignUpForm signUp={signUp} />
          <Typography variant="body1">
            Have an account?{" "}
            <Link component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
