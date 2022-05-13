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
      <AppBar position="static" sx={appBarStyle} color="black">
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
            <a>
              <NavbarButton>Home</NavbarButton>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <NavbarButton>About</NavbarButton>
            </a>
          </Link>
          <Link href="/results">
            <a>
              <NavbarButton>Results</NavbarButton>
            </a>
          </Link>
          <Link href="/news">
            <a>
              <NavbarButton>News</NavbarButton>
            </a>
          </Link>
          <Link href="/links">
            <a>
              <NavbarButton>Links</NavbarButton>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <NavbarButton>Contact</NavbarButton>
            </a>
          </Link>
          <Link href="/partners">
            <a>
              <NavbarButton>Partners</NavbarButton>
            </a>
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
