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
      <SectionHeader title={title} />
      {children}
    </SectionWrapperContainer>
  );
};
