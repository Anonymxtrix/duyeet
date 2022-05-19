import AppContainer from "components/AppContainer";
import Login from "views/Login";
import SignUp from "views/SignUp";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <BrowserRouter>
          <Routes>
            {/* TODO: Add a landing page view */}
            <Route index element={<p>Hello World!</p>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* TODO: Add a error 404 view for unknown paths */}
            <Route path="*" element={<p>There's nothing here!</p>} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </HelmetProvider>
  );
}

export default App;
