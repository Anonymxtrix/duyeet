import AppContainer from "components/AppContainer";
import Login from "views/Login";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <HelmetProvider>
      <CssBaseline />
      <Helmet>
        <title>Duyeet</title>
        <meta name="description" content="More powerful than your todo list." />
      </Helmet>
      <AppContainer>
        <Login />
      </AppContainer>
    </HelmetProvider>
  );
}

export default App;
