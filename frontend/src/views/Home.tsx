import CenteringBox from "components/CenteringBox";
import Page from "components/Page";
import SignUpCard from "components/SignUpCard";
import useSignUp from "hooks/useSignUp";
import { ReactComponent as SvgCompletedTasks } from "images/undraw_completed_tasks.svg";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Home: React.FC = () => {
  const { signUp } = useSignUp();

  return (
    <>
      <AppBar position="static" color="inherit" elevation={0}>
        <ToolBar>
          <Typography variant="h4">Duyeet</Typography>
          <Button
            variant="outlined"
            color="primary"
            sx={{ marginLeft: "auto" }}
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </ToolBar>
      </AppBar>
      <Page>
        <CenteringBox>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={9}
            style={{ minWidth: "70%" }}
          >
            <Stack spacing={3} maxWidth={400} alignSelf="center">
              <Typography variant="h4" fontWeight={500}>
                JUST DUYEET.
                <Typography variant="body2">
                  MORE POWERFUL THAN YOUR TODO LIST.
                </Typography>
              </Typography>
              <SvgCompletedTasks style={{ maxWidth: "100%", height: "auto" }} />
            </Stack>
            <Box
              display="flex"
              flexGrow={1}
              flexDirection="column"
              justifyContent="center"
            >
              <SignUpCard signUp={signUp} />
            </Box>
          </Stack>
        </CenteringBox>
      </Page>
    </>
  );
};

export default Home;
