import { CSSProperties } from "@mui/styled-engine";
import { BANNER_IMAGE } from "../../utilities/constants/images";

function TopBanner() {
  return <img src={BANNER_IMAGE} alt="banner image" style={imgStyle} />;
}

const imgStyle = { width: "100%" };

export default TopBanner;
