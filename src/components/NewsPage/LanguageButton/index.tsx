import { ButtonBase } from "@mui/material";
import Language from "../../../types/language";
import { getLanguageImage } from "../../../utilities/getLanguageImage";

interface Props {
  language: Language;
  setLanguage: any;
  sx?: any;
}

function LanguageButton({ language, setLanguage, sx }: Props) {
  function onClick() {
    setLanguage(language);
  }

  return (
    <ButtonBase style={buttonStyle} sx={sx} onClick={onClick}>
      <img
        src={getLanguageImage(language)}
        alt={`language ${language}`}
        style={imageStyle}
      />
    </ButtonBase>
  );
}

const buttonStyle = {
  borderRadius: "100%",
};

const imageStyle = {
  width: "48px",
};

export default LanguageButton;
