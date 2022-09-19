import {
  JavaScriptIcon,
  ReactJsIcon,
  TypescriptIcon,
  Css3Icon,
  DynamicsMonkLogo,
  GithubIcon,
  EmailIcon,
  LinkedInIcon,
} from "../assets/icons/iconsList";

export const getLogo = (iconName: GetIcons) => {
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

    case "GithubIcon":
      return GithubIcon;

    case "EmailIcon":
      return EmailIcon;

    case "LinkedInIcon":
      return LinkedInIcon;

    default:
      return JavaScriptIcon;
  }
};