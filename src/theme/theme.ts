import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: {
      desktop: {
        h1: string;
        subHeader: string;
        h2: string;
        h3: string;
        body: string;
        secondaryInformation: string;
        label: string;
      };
      mobile: {
        h1: string;
        subHeader: string;
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
        bg1: string;
        bg2: string;
        bg3: string;
      };
      contextual: {
        error: string;
        success: string;
      };
      texts: {
        mainHeading: string;
        subHeader: string;
        headers: string;
        body: string;
        secondaryText: string;
        label: string;
        highlight: string;
        neutral: string;
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
    };
    breakpoint: {
      desktopMinWidth: string;
      tabletMaxWidth: string;
      tabletMinWidth: string;
      mobileMinWidth: string;
      mobileMaxWidth: string;
    };
    borderRadius: {
      xxs: string;
    };
  }
}

export const theme: DefaultTheme = {
  fontSize: {
    desktop: {
      h1: "50px",
      subHeader: "45px",
      h2: "32px",
      h3: "26px",
      body: "24px",
      secondaryInformation: "22px",
      label: "18px",
    },
    mobile: {
      h1: "36px",
      subHeader: "31px",
      h2: "24px",
      h3: "22px",
      body: "20px",
      secondaryInformation: "18px",
      label: "16px",
    },
  },
  lineHeight: "28px",
  colors: {
    background: {
      bg1: "#01031A",
      bg2: "#020626",
      bg3: "#02072E",
    },
    contextual: {
      error: "#E50B25",
      success: "#0BCC2B",
    },
    texts: {
      mainHeading: "#E5E5FF",
      subHeader: "#CFCFE5",
      headers: "#E2E2FA",
      body: "#DADAF2",
      secondaryText: "#DADAF2",
      label: "#DADAF2",
      highlight: "#2FF2F0",
      neutral: "#FAFAFF",
    },
  },
  spaces: {
    xxs: "4px",
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
    xl: "40px",
    xxl: "48px",
    xxl2: "56px",
    xxl3: "64px",
    xxl4: "72px",
    xxl5: "80px",
    xxl6: "88px",
  },
  breakpoint: {
    mobileMinWidth: "358px",
    mobileMaxWidth: "685px",
    tabletMinWidth: "686px",
    tabletMaxWidth: "1335px",
    desktopMinWidth: "1336px",
  },
  borderRadius: {
    xxs: "4px",
  },
};
