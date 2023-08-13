import { FC } from "react";

import {
  SiRedux,
  SiStyledcomponents,
  SiReactrouter,
  SiTypescript,
  SiTestinglibrary,
  SiJest,
  SiNextdotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { GetTechWithIconContainer } from "./styles/GetTechWithIconContainer";

export const GetTechWithIcon: FC<IGetTechWithIcon> = ({ type, text }) => {
  switch (type) {
    case "reduxToolkit":
      return (
        <GetTechWithIconContainer>
          <SiRedux width="20px" height="20px" color="#dadaf2" />
          {text}
        </GetTechWithIconContainer>
      );

    case "styledComponents":
      return (
        <GetTechWithIconContainer>
          <SiStyledcomponents width="20px" height="20px" color="#dadaf2" />
          {text}
        </GetTechWithIconContainer>
      );

    case "reactRouter":
      return (
        <GetTechWithIconContainer>
          <SiReactrouter width="20px" height="20px" color="#dadaf2" />
          {text}
        </GetTechWithIconContainer>
      );

    case "reactJs":
      return (
        <GetTechWithIconContainer>
          <FaReact width="20px" height="20px" color="#dadaf2" />
          {text}
        </GetTechWithIconContainer>
      );

    case "typescript":
      return (
        <GetTechWithIconContainer>
          <SiTypescript width="20px" height="20px" color="#dadaf2" />
          {text}
        </GetTechWithIconContainer>
      );

    case "reactTestingLibrary":
      return (
        <GetTechWithIconContainer>
          <SiTestinglibrary width="20px" height="20px" color="#dadaf2" />
          {text}
        </GetTechWithIconContainer>
      );

    case "jest":
      return (
        <GetTechWithIconContainer>
          <SiJest width="20px" height="20px" color="#dadaf2" />
          {text}
        </GetTechWithIconContainer>
      );

    case "nextJs":
      return (
        <GetTechWithIconContainer>
          <SiNextdotjs width="20px" height="20px" color="#dadaf2" />
          {text}
        </GetTechWithIconContainer>
      );

    default:
      return <></>;
  }
};
