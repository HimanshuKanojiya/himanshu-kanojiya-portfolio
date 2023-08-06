import { FC } from "react";
import Image from "next/image";

import { LogoContainer } from "./styles/LogoContainer";

import portfolioLogo from "@assets/images/portfolioLogo.svg";

export const Logo: FC = () => {
  return (
    <LogoContainer>
      <Image
        src={portfolioLogo}
        width={24}
        height={24}
        alt="himanshu kanojiya portfolio"
      />
      <strong>HIMANSHU KANOJIYA</strong>
    </LogoContainer>
  );
};
