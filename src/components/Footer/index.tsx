import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CSSProperties } from "react";
import { FOOTER_IMAGE } from "../../utilities/constants/images";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div
      style={{
        ...containerStyle,
        ...{ textAlign: isMobile ? "justify" : "center" },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2">
          This project has been funded with support from the European
          Commission. This webpage reflects the views only of the ROBOSTEM
          partnership, and the Commission cannot be held responsible for any use
          which may be made of the information contained therein.
        </Typography>
        <br />
        <Typography variant="h6" align="center">
          Erasmus+ Project N° 2019-1-RO01-KA202-063965
        </Typography>
        <img src={FOOTER_IMAGE} alt="footer" style={footerImageStyle} />
      </Container>
    </div>
  );
}

const containerStyle: CSSProperties = {
  backgroundColor: "black",
  color: "white",
  padding: "2rem 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const footerImageStyle = {
  width: "300px",
  marginTop: "1rem",
};

export default Footer;
