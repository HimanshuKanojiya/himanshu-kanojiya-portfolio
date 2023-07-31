import { FC } from "react";

import { SectionHeaderContainer } from "./styles/SectionHeaderContainer";

export const SectionHeader: FC<ISectionHeader> = ({ title }) => {
  return (
    <SectionHeaderContainer>
      <h2>{title}</h2>
      <span className="heading-border" />
    </SectionHeaderContainer>
  );
};
