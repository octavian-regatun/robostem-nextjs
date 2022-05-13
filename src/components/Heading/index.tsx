import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { CSSProperties } from "react";

interface Props {
  children: string;
  align: "inherit" | "left" | "center" | "right" | "justify";
  variant: Variant;
  style?: CSSProperties;
}

function Heading({ children, align, variant, style }: Props) {
  return (
    <Typography
      variant={variant}
      align={align}
      fontFamily="Comfortaa"
      style={style}
    >
      {children}
    </Typography>
  );
}

export default Heading;
