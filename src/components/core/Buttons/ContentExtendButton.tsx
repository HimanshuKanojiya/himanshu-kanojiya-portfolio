import React from "react";
import { getLogo } from "../../../helper/getLogo";
import { ContentExtendButton as ExtendButton } from "../../styles/Buttons/ContentExtendButton";

export const ContentExtendButton: React.FC<IContentExtendButton> = ({
  showMore,
  handleShowMore,
  isDesktop = false,
}) => {
  return (
    <ExtendButton onClick={handleShowMore} onKeyDown={handleShowMore}>
      {showMore && !isDesktop && (
        <p>
          See Less <img src={getLogo("ExpandLessIcon")} alt="See Less" />
        </p>
      )}

      {!showMore && !isDesktop && (
        <p>
          See More <img src={getLogo("ExpandIcon")} alt="See More" />
        </p>
      )}
    </ExtendButton>
  );
};
