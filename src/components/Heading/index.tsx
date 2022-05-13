import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

interface Props {
  children: string;
  align: "inherit" | "left" | "center" | "right" | "justify";
  variant: Variant;
}

function Heading({ children, align, variant }: Props) {
  return (
    <Typography variant={variant} align={align} fontFamily="Comfortaa">
      {children}
    </Typography>
  );
}

export default Heading;
