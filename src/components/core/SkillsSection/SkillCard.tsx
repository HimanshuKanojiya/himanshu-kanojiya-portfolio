import React, { useState } from "react";

import { SkillCardContainer } from "../../styles/SkillsSection/SkillCardContainer";
import { SkillsList } from "../SkillsList/SkillsList";
import { ContentExtendButton } from "../Buttons/ContentExtendButton";

import { getLogo } from "../../../helper/getLogo";

export const SkillCard: React.FC<ISkillCard> = ({
  skillLogo,
  skillTitle,
  skillDescription,
  skillsItems,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <SkillCardContainer>
      <div className="skill-logo">
        <img src={getLogo(skillLogo as GetIcons)} alt={skillTitle} />
      </div>
      <div className="skill-content">
        <h3 className="skill-heading">{skillTitle}</h3>
        <p
          className={`about-skill ${!showMore ? "read-more-about-sKill" : ""}`}
        >
          {skillDescription}
        </p>
        {showMore && <SkillsList layout="column" skills={skillsItems} />}
        <ContentExtendButton
          showMore={showMore}
          handleShowMore={() => setShowMore((prevState) => !prevState)}
        />
      </div>
    </SkillCardContainer>
  );
};
