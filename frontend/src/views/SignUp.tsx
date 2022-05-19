import CenteringBox from "components/CenteringBox";
import Page from "components/Page";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const SignUp: React.FC = () => {
  return (
    <Page title="Sign Up">
      <CenteringBox>
        <Card>
          <CardHeader title="Sign Up" />
          <CardContent>
            <Stack spacing={3}>
              {/* TODO: Add sign up form */}
              <Typography variant="body1">
                {/* TODO: Link login link to login route */}
                Have an account? <Link href="#">Login</Link>
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </CenteringBox>
    </Page>
  );
};

export default SignUp;
