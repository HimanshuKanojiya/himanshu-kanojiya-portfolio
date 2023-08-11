import "@components/styles/reset.css";
import "@components/styles/globals.css";

import type { Metadata } from "next";

import StyledComponentsRegistry from "../lib/registry";

export const metadata: Metadata = {
  title: "Himanshu Kanojiya Web App Developer | Portfolio Website",
  description:
    "I am a frontend web app developer with 2 years of experience in React JS and Next JS, along with 3 years of expertise in SEO. I am currently employed at Dynamics Monk Pvt Ltd, where my focus lies in designing and developing dynamic and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
