import Page from "components/Page";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
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
      <Page></Page>
    </>
  );
};

export default Home;
