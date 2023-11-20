import {
  bugTypeIcon,
  darkTypeIcon,
  dragonTypeIcon,
  electricTypeIcon,
  fairyTypeIcon,
  fightTypeIcon,
  fireTypeIcon,
  flyingTypeIcon,
  ghostTypeIcon,
  grassTypeIcon,
  groundTypeIcon,
  iceTypeIcon,
  normalTypeIcon,
  poisonTypeIcon,
  psychicTypeIcon,
  rockTypeIcon,
  steelTypeIcon,
  waterTypeIcon,
} from "../assets/typeIcons";

export const getTypeItems = (type) => {
  let img;
  let bg;
  switch (type.toLowerCase()) {
    case "bug":
      img = bugTypeIcon;
      bg = "91C12F";
      break;
    case "dark":
      img = darkTypeIcon;
      bg = "5A5465";
      break;
    case "dragon":
      img = dragonTypeIcon;
      bg = "0B6DC3";
      break;
    case "electric":
      img = electricTypeIcon;
      bg = "F4D23C";
      break;
    case "fairy":
      img = fairyTypeIcon;
      bg = "EC8FE6";
      break;
    case "fighting":
      img = fightTypeIcon;
      bg = "CE416B";
      break;
    case "fire":
      img = fireTypeIcon;
      bg = "FF9D55";
      break;
    case "flying":
      img = flyingTypeIcon;
      bg = "89AAE3";
      break;
    case "ghost":
      img = ghostTypeIcon;
      bg = "5269AD";
      break;
    case "grass":
      img = grassTypeIcon;
      bg = "63BC5A";
      break;
    case "ground":
      img = groundTypeIcon;
      bg = "D97845";
      break;
    case "ice":
      img = iceTypeIcon;
      bg = "73CEC0";
      break;
    case "normal":
      img = normalTypeIcon;
      bg = "919AA2";
      break;
    case "poison":
      img = poisonTypeIcon;
      bg = "B567CE";
      break;
    case "psychic":
      img = psychicTypeIcon;
      bg = "FA7179";
      break;
    case "rock":
      img = rockTypeIcon;
      bg = "C5B78C";
      break;
    case "steel":
      img = steelTypeIcon;
      bg = "5A8EA2";
      break;
    case "water":
      img = waterTypeIcon;
      bg = "5090D6";
      break;
    default:
      bg = "000";
      break;
  }
  return { img, bg };
};
