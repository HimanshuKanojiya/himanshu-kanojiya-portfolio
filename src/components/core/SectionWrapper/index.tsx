import { FC } from "react";

import { SectionHeader } from "../SectionHeader";
import sectionWrapperStyles from "./styles/sectionWrapper.module.css";

export const SectionWrapper: FC<ISectionWrapper> = ({ children, title }) => {
  return (
    <div className={sectionWrapperStyles.sectionWrapper}>
      <SectionHeader title={title} />
      {children}
    </div>
  );
};
