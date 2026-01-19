import localFont from "next/font/local";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import InstagramLink from "./InstagramLink"; // 👈 Import the new component

// Custom font
const europaGrotesk = localFont({
  src: "./fonts/EuropaGroteskSH-MedIta.otf",
  display: "swap",
});

// Optional: Inter is still imported in case you use it elsewhere
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected Works",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(europaGrotesk.className, "overflow-hidden")}>
        {/* Top-right Instagram link */}
        <InstagramLink />

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
