import {
  JavaScriptIcon,
  ReactJsIcon,
  TypescriptIcon,
  Css3Icon,
  DynamicsMonkLogo,
} from "../assets/icons/iconsList";

export const getSkillLogo = (iconName: GetIcons) => {
  switch (iconName) {
    case "JavaScriptIcon":
      return JavaScriptIcon;

    case "ReactJsIcon":
      return ReactJsIcon;

    case "TypescriptIcon":
      return TypescriptIcon;

    case "Css3Icon":
      return Css3Icon;

    case "DynamicsMonkLogo":
      return DynamicsMonkLogo;

    default:
      return JavaScriptIcon;
  }
};
