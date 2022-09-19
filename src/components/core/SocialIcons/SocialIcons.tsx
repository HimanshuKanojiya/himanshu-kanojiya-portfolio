import React from "react";
import { getLogo } from "../../../helper/getLogo";

export const SocialIcons: React.FC<ISocialIcons> = ({ className }) => {
  return (
    <div className={className}>
      <a href="/">
        <img src={getLogo("GithubIcon")} alt="github-social-link" />
      </a>
      <a href="/">
        <img src={getLogo("EmailIcon")} alt="email-social-link" />
      </a>
      <a href="/">
        <img src={getLogo("LinkedInIcon")} alt="linkedin-social-link" />
      </a>
    </div>
  );
};
