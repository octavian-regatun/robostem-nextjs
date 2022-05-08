import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LOGO_IMAGE } from "../../../utilities/constants/images";
import NavbarButton from "../NavbarButton";

function NavbarDesktop() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={appBarStyle}>
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
          <Typography variant="h5" component="div" sx={logoTextStyle}>
            RoboSTEM
          </Typography>
          <NavbarButton>Home</NavbarButton>
          <NavbarButton>About</NavbarButton>
          <NavbarButton>Results</NavbarButton>
          <NavbarButton>News</NavbarButton>
          <NavbarButton>Links</NavbarButton>
          <NavbarButton>Contact</NavbarButton>
          <NavbarButton>Partners</NavbarButton>
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
