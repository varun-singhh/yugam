import React from "react";
import Script from "next/script";
import "@/assets/css/animate.css";
import "@/assets/scss/style.scss";
import logo from "@/assets/images/global/logo.png";
import LayoutChildren from "@/lib/layoutChildren";
import {
  Open_Sans,
  Poppins,
  Plus_Jakarta_Sans,
  Roboto,
} from "next/font/google";

export const metadata = {
  title: "yugam next.js template",
  description: "yugam next.js multipage webdite with next.js and bootstrap",
  icons: {
    icon: `${logo.src}`,
  },
};

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--family-style-1",
  adjustFontFallback: false,
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--family-style-4",
  adjustFontFallback: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  variable: "--family-style-3",
  adjustFontFallback: false,
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--family-style-2",
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  return (
    <>
      <html
        lang="en"
        className={`${open_sans.variable} ${plus_jakarta_sans.variable} ${poppins.variable} ${roboto.variable} `}
      >
        <body suppressHydrationWarning={true}>
          <LayoutChildren>{children}</LayoutChildren>
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
