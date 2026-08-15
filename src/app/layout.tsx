import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Yearim Kim — WordPress Developer & Designer",
  description:
    "Portfolio of Yearim Kim, a WordPress developer combining custom themes, Gutenberg, frontend engineering, performance, and thoughtful design.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
