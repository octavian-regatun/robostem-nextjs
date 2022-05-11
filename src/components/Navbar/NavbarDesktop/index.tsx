import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { LOGO_IMAGE } from "../../../utilities/constants/images";
import NavbarButton from "../NavbarButton";

function NavbarDesktop() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={appBarStyle} color='black'>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <img src={LOGO_IMAGE} alt="logo" style={logoStyle} />
          <Typography variant="h4" component="div" sx={logoTextStyle}>
            RoboSTEM
          </Typography>
          <Link href="/">
            <NavbarButton>Home</NavbarButton>
          </Link>
          <Link href="/about">
            <NavbarButton>About</NavbarButton>
          </Link>
          <Link href="/results">
            <NavbarButton>Results</NavbarButton>
          </Link>
          <Link href="/news">
            <NavbarButton>News</NavbarButton>
          </Link>
          <Link href="/links">
            <NavbarButton>Links</NavbarButton>
          </Link>
          <Link href="/contact">
            <NavbarButton>Contact</NavbarButton>
          </Link>
          <Link href="/partners">
            <NavbarButton>Partners</NavbarButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const appBarStyle = { backgroundColor: "black" };
const logoStyle = { width: "64px" };
const logoTextStyle = {
  flexGrow: 1,
  fontFamily: "Orbitron",
};
export default NavbarDesktop;
