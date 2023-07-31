import { FC } from "react";

import { SectionHeader } from "../SectionHeader";
import { SectionWrapperContainer } from "./styles/SectionWrapperContainer";

export const SectionWrapper: FC<ISectionWrapper> = ({ children, title }) => {
  return (
    <SectionWrapperContainer>
      <SectionHeader title={title} />
      {children}
    </SectionWrapperContainer>
  );
};
