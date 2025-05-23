import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Team from "./components/team";
import Features from "./components/features";
import Contact from "./components/contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import './App.css';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#3f73a6" },
    secondary: { main: "#3fa657" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
    default: '#1d1d1d',
  },
    primary: { main: "#3f73a6" },
    secondary: { main: "#3fa657" },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
