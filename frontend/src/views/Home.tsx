import CenteringBox from "components/CenteringBox";
import Page from "components/Page";
import SignUpCard from "components/SignUpCard";
import { ReactComponent as SvgCompletedTasks } from "images/undraw_completed_tasks.svg";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Home: React.FC = () => {
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
          <Stack direction={{ xs: "column", sm: "row" }} spacing={9}>
            <Stack spacing={3} maxWidth={400}>
              <Typography variant="body2">
                <Typography variant="h4" fontWeight={500}>
                  JUST DUYEET.
                </Typography>
                MORE POWERFUL THAN YOUR TODO LIST.
              </Typography>
              <SvgCompletedTasks style={{ maxWidth: "100%", height: "auto" }} />
            </Stack>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <SignUpCard />
            </Box>
          </Stack>
        </CenteringBox>
      </Page>
    </>
  );
};

export default Home;
