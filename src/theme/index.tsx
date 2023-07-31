import { DefaultTheme } from "styled-components";
import { chakraPetch, ibmPlexSans } from "../utils/fontLoader";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: {
      chakraPetch: string;
      ibmPlexSans: string;
    };
    fontSize: {
      desktop: {
        h1: string;
        h2: string;
        h3: string;
        body: string;
        secondaryInformation: string;
        label: string;
      };
      mobile: {
        h1: string;
        h2: string;
        h3: string;
        body: string;
        secondaryInformation: string;
        label: string;
      };
    };
    lineHeight: string;
    colors: {
      background: {
        main: string;
        secondary: string;
        tertiary: string;
      };
      texts: {
        primaryHeading: string;
        subHeaders: string;
        body: string;
        secondaryText: string;
        label: string;
        highlight: string;
        neutral: string;
        borderColor10per: string;
        borderColor20per: string;
      };
    };
    spaces: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxl2: string;
      xxl3: string;
      xxl4: string;
      xxl5: string;
      xxl6: string;
      xxl7: string;
    };
    breakpoint: {
      desktopMinWidth: string;
      tabletMaxWidth: string;
      tabletMinWidth: string;
      mobileMinWidth: string;
      mobileMaxWidth: string;
    };
  }
}

export const portfolioTheme: DefaultTheme = {
  fontFamily: {
    chakraPetch: "Chakra Petch, sans-serif",
    ibmPlexSans: "IBM Plex Sans, sans-serif",
  },
  fontSize: {
    desktop: {
      h1: "65px",
      h2: "32px",
      h3: "26px",
      body: "24px",
      secondaryInformation: "22px",
      label: "18px",
    },
    mobile: {
      h1: "36px",
      h2: "24px",
      h3: "22px",
      body: "20px",
      secondaryInformation: "18px",
      label: "16px",
    },
  },
  lineHeight: "1.2",
  colors: {
    background: {
      main: "#01031a",
      secondary: "#020626",
      tertiary: "#02072e",
    },
    texts: {
      primaryHeading: "#e5e5ff",
      subHeaders: "#e2e2fa",
      body: "#dadaf2",
      secondaryText: "#dadaf2",
      label: "#dadaf2",
      highlight: "#2ff2f0",
      neutral: "#fafaff",
      borderColor10per: "rgba(47, 242, 240, 10%)",
      borderColor20per: "rgba(47, 242, 240, 20%)",
    },
  },
  spaces: {
    xxs: "4px",
    xs: "8px",
    s: "12px",
    m: "16px",
    l: "20px",
    xl: "24px",
    xxl: "28px",
    xxl2: "32px",
    xxl3: "36px",
    xxl4: "40px",
    xxl5: "44px",
    xxl6: "48px",
    xxl7: "52px",
  },
  breakpoint: {
    mobileMinWidth: "358px",
    mobileMaxWidth: "685px",
    tabletMinWidth: "686px",
    tabletMaxWidth: "1335px",
    desktopMinWidth: "1336px",
  },
};
