import { BANNER_IMAGE } from "../../utilities/constants/images";

function TopBanner() {
  <img src={BANNER_IMAGE} alt="banner image" style={{...imgStyle}} />;
}

const imgStyle = { width: "100%", objectFit: "cover" };

export default TopBanner;
