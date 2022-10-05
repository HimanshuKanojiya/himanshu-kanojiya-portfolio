import {
  JavaScriptIcon,
  ReactJsIcon,
  TypescriptIcon,
  Css3Icon,
  DynamicsMonkLogo,
  GithubIcon,
  EmailIcon,
  LinkedInIcon,
  FrontEndSkillIcon,
  ExpandLessIcon,
  ExpandIcon,
  UIDesignSkillIcon,
  TestingSkillIcon,
  ToolOtherSkillIcon,
  FigmaSkillIcon,
  JestSkillIcon,
  ChakraUISkillIcon,
  EnzymeSkillIcon,
  FirebaseSkillIcon,
  GithubSkillIcon,
  HtmlSkillIcon,
  JiraScrumSkillIcon,
  NodeJsSkillIcon,
  ReduxToolkitSkillIcon,
  RtlSkillIcon,
  SassSkillIcon,
  StyledCompSkillIcon,
  TailwindSkillIcon,
  WebpackSkillIcon,
  BitbucketSkillIcon,
  BlogsSampleImage,
  ExternalLinkIcon,
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

    case "FrontEndSkillIcon":
      return FrontEndSkillIcon;

    case "ExpandLessIcon":
      return ExpandLessIcon;

    case "ExpandIcon":
      return ExpandIcon;

    case "UIDesignSkillIcon":
      return UIDesignSkillIcon;

    case "TestingSkillIcon":
      return TestingSkillIcon;

    case "ToolOtherSkillIcon":
      return ToolOtherSkillIcon;

    case "FigmaSkillIcon":
      return FigmaSkillIcon;

    case "JestSkillIcon":
      return JestSkillIcon;

    case "ChakraUISkillIcon":
      return ChakraUISkillIcon;

    case "EnzymeSkillIcon":
      return EnzymeSkillIcon;

    case "FirebaseSKillIcon":
      return FirebaseSkillIcon;

    case "GithubSkillIcon":
      return GithubSkillIcon;

    case "HtmlSkillIcon":
      return HtmlSkillIcon;

    case "JiraScrumSkillIcon":
      return JiraScrumSkillIcon;

    case "NodeJsSkillIcon":
      return NodeJsSkillIcon;

    case "ReduxToolkitSkillIcon":
      return ReduxToolkitSkillIcon;

    case "RtlSkillIcon":
      return RtlSkillIcon;

    case "SassSkillIcon":
      return SassSkillIcon;

    case "StyledCompSkillIcon":
      return StyledCompSkillIcon;

    case "TailwindSKillIcon":
      return TailwindSkillIcon;

    case "WebpackSkillIcon":
      return WebpackSkillIcon;

    case "BitbucketSkillIcon":
      return BitbucketSkillIcon;

    case "BlogsSampleImage":
      return BlogsSampleImage;

    case "ExternalLinkIcon":
      return ExternalLinkIcon;

    default:
      return JavaScriptIcon;
  }
};
