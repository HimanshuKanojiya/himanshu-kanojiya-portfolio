import React from "react";

import { FloatingSocialMediaContainer } from "../../styles/FloatingSocialMedia/FloatingSocialMediaContainer";
import { SocialIcons } from "../SocialIcons/SocialIcons";

export const FloatingSocialMedia: React.FC = () => {
  return (
    <FloatingSocialMediaContainer>
      <SocialIcons className="social-icons" />
      <div className="vertical-border" />
    </FloatingSocialMediaContainer>
  );
};
