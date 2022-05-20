import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const SignUpCard: React.FC = () => {
  return (
    <Card>
      <CardHeader title="Sign Up" />
      <CardContent>
        <Stack spacing={3}>
          {/* TODO: Add sign up form */}
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
