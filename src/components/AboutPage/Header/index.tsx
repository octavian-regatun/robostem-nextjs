import { Typography } from "@mui/material";
import { CSSProperties } from "react";

const headings = [
  "2019-1-RO01-KA202-063965",
  "A Trainers Toolkit To Foster STEM Skills Using Microcontroller Applications",
  "ROBOSTEM",
  "Project Total Duration 24 months",
  "10-11-2019 to 09-11-2021",
];

function Header() {
  return (
    <>
      {headings.map((heading, index) => (
        <Typography key={index} variant="h6" style={textStyle}>
          {heading}
        </Typography>
      ))}
    </>
  );
}

const textStyle: CSSProperties = {
  fontWeight: "bold",
  textAlign: "center",
};

export default Header;
