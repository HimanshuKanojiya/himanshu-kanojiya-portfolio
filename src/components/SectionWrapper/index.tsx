import { FC } from "react";

import { SectionHeader } from "../SectionHeader";
import { SectionWrapperContainer } from "./styles/SectionWrapperContainer";

export const SectionWrapper: FC<ISectionWrapper> = ({
  children,
  title,
  sectionId = "",
}) => {
  return (
    <SectionWrapperContainer id={sectionId}>
      {Boolean(title) && <SectionHeader title={title as string} />}
      {children}
    </SectionWrapperContainer>
  );
};
