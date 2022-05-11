import { Typography } from "@mui/material";

function SimpleText({
  children,
}: {
  children: (string | JSX.Element)[] | (string | JSX.Element);
}) {
  return (
    <Typography variant="body1" align="justify" marginBottom="2rem">
      {children}
    </Typography>
  );
}

export default SimpleText;
