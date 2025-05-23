// Navbar.js
import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import lightmodeicon from "../assets/images/lightmode.png";
import darkmodeicon from "../assets/images/darkmode.png";

const pages = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Meet The Team", href: "#team" },
  { label: "The App", href: "#app" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ darkMode, toggleTheme }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo for Desktop */}
          <Typography
            variant="h6"
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Apollo
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.href} onClick={handleCloseNavMenu}>
                  <Button
                    href={page.href}
                    sx={{ textAlign: "center", width: "100%" }}
                  >
                    {page.label}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for Mobile */}
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Apollo
          </Typography>

          {/* Desktop Navigation Links */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 5 }}
          >
            {pages.map((page) => (
              <Button
                key={page.href}
                href={page.href}
                sx={{ color: "inherit", fontWeight: "bold" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Dark Mode Switch */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={lightmodeicon}
              alt="light mode icon"
              sx={{ width: 32, height: 32 }}
            />
            <Switch checked={darkMode} onChange={toggleTheme} />
            <Box
              component="img"
              src={darkmodeicon}
              alt="dark mode icon"
              sx={{ width: 32, height: 32 }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
