import { FC } from "react";

import sectionHeaderStyles from "./styles/sectionHeader.module.css";

export const SectionHeader: FC<ISectionHeader> = ({ title }) => {
  return (
    <div className={sectionHeaderStyles.heading}>
      <h2>{title}</h2>
      <span className={sectionHeaderStyles.headingBorder}></span>
    </div>
  );
};
