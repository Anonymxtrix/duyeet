import AppContainer from "components/AppContainer";
import Error404 from "views/Error404";
import Home from "views/Home";
import Login from "views/Login";
import SignUp from "views/SignUp";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

function App() {
  return (
    <HelmetProvider>
      <CssBaseline />
      <Helmet>
        <title>Duyeet</title>
        <meta name="description" content="More powerful than your todo list." />
      </Helmet>
      <ThemeProvider theme={responsiveFontSizes(createTheme())}>
        <AppContainer>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </AppContainer>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
