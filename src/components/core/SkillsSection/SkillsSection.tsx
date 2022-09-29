import React, { useState } from "react";
import { getLogo } from "../../../helper/getLogo";
import { ContentExtendButton } from "../Buttons/ContentExtendButton";
import { SkillsSectionContainer } from "../../styles/SkillsSection/SkillsSectionContainer";

export const SkillsSection: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <SkillsSectionContainer>
      <h2 className="skillTitle">SKILLS</h2>
      <div className="skillsList">
        <div className="skill">
          <div>
            <img src={getLogo("FrontEndSkillIcon")} alt="frontend-skills" />
          </div>
          <div>
            <h3>Front-end Skills</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed eu luctus dui pulvinar est libero, scelerisque pellentesque.
            </p>
          </div>
          <ContentExtendButton
            showMore={showMore}
            handleShowMore={() => setShowMore((prevState) => !prevState)}
          />
        </div>
      </div>
    </SkillsSectionContainer>
  );
};
