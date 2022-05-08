import { useMediaQuery, useTheme } from "@mui/material";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return matches ? <NavbarDesktop /> : <NavbarMobile />;
}

export default Navbar;
