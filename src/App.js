import React from "react";
import { Container, Typography } from "@mui/material";
import Home from "./pages/Home";
import MyButton from "./components/MyButton";

function App() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Xin chào từ App.js 👋
      </Typography>

      <Home />
      <MyButton />
    </Container>
  );
}

export default App;
