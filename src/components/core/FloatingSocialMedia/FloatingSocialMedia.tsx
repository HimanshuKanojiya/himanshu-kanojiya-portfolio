import React from "react";

import { FloatingSocialMediaContainer } from "../../styles/FloatingSocialMedia/FloatingSocialMediaContainer";
import { SocialIcons } from "../SocialIcons/SocialIcons";

export const FloatingSocialMedia: React.FC = () => {
  return (
    <FloatingSocialMediaContainer>
      <SocialIcons className="socialIcons" />
      <div className="verticalBorder" />
    </FloatingSocialMediaContainer>
  );
};
