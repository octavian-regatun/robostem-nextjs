import { ButtonBase } from "@mui/material";
import Language from "../../../types/language";

interface Props {
  src: string;
  language: Language;
  setLanguage: any;
  sx?: any;
}

function LanguageButton({ src, language, setLanguage, sx }: Props) {
  function onClick() {
    setLanguage(language);
  }

  return (
    <ButtonBase style={buttonStyle} sx={sx} onClick={onClick}>
      <img src={src} alt={`language ${language}`} style={imageStyle} />
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
