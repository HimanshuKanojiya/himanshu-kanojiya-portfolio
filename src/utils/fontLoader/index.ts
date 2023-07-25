import { Chakra_Petch, IBM_Plex_Sans } from "next/font/google";

export const chakraPetch = Chakra_Petch({
  variable: "--portfolio-text-chakraPetch",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const ibmPlexSans = IBM_Plex_Sans({
  variable: "--portfolio-text-ibmPlexSans",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});
