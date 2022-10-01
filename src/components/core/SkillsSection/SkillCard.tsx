import React, { useState } from "react";
import { SkillCardContainer } from "../../styles/SkillsSection/SkillCardContainer";
import { SkillsList } from "../SkillsList/SkillsList";
import { getLogo } from "../../../helper/getLogo";
import { ContentExtendButton } from "../Buttons/ContentExtendButton";

export const SkillCard: React.FC<ISkillCard> = ({
  skillLogo,
  skillTitle,
  skillDescription,
  skillsItems,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <SkillCardContainer>
      <div className="skillLogo">
        <img src={getLogo(skillLogo as GetIcons)} alt={skillTitle} />
      </div>
      <div className="skillContent">
        <h3 className="skillHeading">{skillTitle}</h3>
        <p className={`aboutSkill ${!showMore ? "readMoreAboutSKill" : ""}`}>
          {skillDescription}
        </p>
      </div>
      {showMore && <SkillsList layout="column" skills={skillsItems} />}
      <ContentExtendButton
        showMore={showMore}
        handleShowMore={() => setShowMore((prevState) => !prevState)}
      />
    </SkillCardContainer>
  );
};