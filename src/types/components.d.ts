interface ISocialIcons {
  link: string;
  value: string;
  type: "github" | "linkedIn" | "email";
}

interface IMobileMenu {
  onClickToClose: () => void;
  activeMenuItem: string;
  onClickTotoggleMenuItem: (id: string) => void;
}

interface IFeatureProjectProps {
  number: number;
  featuredLabelText: string;
  title: string;
  moreInfo: {
    codeLink: {
      show: boolean;
      href: string;
      value: string;
    };
    liveLink: {
      show: boolean;
      href: string;
      value: string;
    };
  };
  description: string;
  techUsed: { id: string; value: string }[];
  image: StaticImageData;
  className?: string;
}

interface INormalProjectProps {
  number: number;
  featuredLabelText: string;
}

type techTypes =
  | "reduxToolkit"
  | "styledComponents"
  | "reactRouter"
  | "reactJs"
  | "typescript"
  | "reactTestingLibrary"
  | "jest"
  | "nextJs";

interface IGetTechWithIcon {
  type: techTypes;
  text: string;
}
