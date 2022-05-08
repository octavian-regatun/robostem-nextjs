import { Button, ButtonProps } from "@mui/material";
import getIcon from "./getIcon";

function NavbarButton(props: ButtonProps) {
  return (
    <Button
      variant="outlined"
      color="white"
      startIcon={getIcon(props.children as string)}
      sx={buttonStyle}
      {...props}
    >
      {props.children}
    </Button>
  );
}

const buttonStyle = {
  "&:not(:last-child)": {
    marginRight: "0.5rem",
  },
};

export default NavbarButton;
