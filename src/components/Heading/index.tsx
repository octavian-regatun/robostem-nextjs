import { Typography } from "@mui/material";

interface Props {
  children: string;
  align: "inherit" | "left" | "center" | "right" | "justify";
}

function Heading({ children, align }: Props) {
  return (
    <Typography variant="h4" align={align} fontFamily='Comfortaa'>
      {children}
    </Typography>
  );
}

export default Heading;
