import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";
import { LOGO_IMAGE } from "../../../utilities/constants/images";

function NavbarMobile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={appBarStyle}>
        <Toolbar sx={toolbarStyle}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div style={logoContainer}>
            <img src={LOGO_IMAGE} alt="logo" style={logoStyle} />
            <Typography variant="h4" component="div" sx={logoTextStyle}>
              RoboSTEM
            </Typography>
          </div>
          <div></div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const appBarStyle = {
  backgroundColor: "black",
};
const toolbarStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};
const logoContainer = {
  display: "flex",
  alignItems: "center",
};
const logoStyle = {
  width: "64px",
};
const logoTextStyle = {
  flexGrow: 1,
  fontFamily: "Orbitron",
};

export default NavbarMobile;
