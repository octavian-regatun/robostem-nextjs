import { CSSProperties } from "react";
import Heading from "../../Heading";

export enum Location {
  Romania = "Romania",
  Malta = "Malta",
  Poland = "Poland",
  Portugal = "Portugal",
  Croatia = "Croatia",
  Greece = "Greece",
}

interface Props {
  src: string;
  name: string;
  location: string;
}

function Partner({ src, name, location }: Props) {
  return (
    <div style={containerStyle}>
      <Heading variant="h5" align="center">
        {name}
      </Heading>
      <Heading variant="h6" align="center">
        {location}
      </Heading>
      <img src={src} alt={name} style={imageStyle} />
    </div>
  );
}

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  minWidth: "80px",
  maxWidth: "275px",
  maxHeight: "150px",
  marginBottom:'4rem'
};

export default Partner;
