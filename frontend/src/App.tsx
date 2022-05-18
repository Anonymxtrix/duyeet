import Login from "./views/Login";
import React from "react";
import Helmet from "react-helmet";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Helmet>
        <title>Duyeet</title>
        <meta name="description" content="More powerful than your todo list." />
      </Helmet>
      <Login />
    </React.Fragment>
  );
}

export default App;
