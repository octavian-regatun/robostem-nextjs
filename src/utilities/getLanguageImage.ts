import Language from "../types/language";
import {
  EN_IMAGE,
  GR_IMAGE,
  HR_IMAGE,
  PL_IMAGE,
  PT_IMAGE,
  RO_IMAGE,
} from "./constants/images";

function getLanguageImage(language: Language) {
  switch (language) {
    case Language.English:
      return EN_IMAGE;
    case Language.Greek:
      return GR_IMAGE;
    case Language.Portuguese:
      return PT_IMAGE;
    case Language.Croatian:
      return HR_IMAGE;
    case Language.Polish:
      return PL_IMAGE;
    case Language.Romanian:
      return RO_IMAGE;
    default:
      break;
  }
}

export { getLanguageImage };
