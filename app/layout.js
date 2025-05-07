import { Nunito, Open_Sans, Unica_One, Crimson_Text } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const open_sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const crimson_text = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

const unica_one = Unica_One({
  variable: "--font-unica-one",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Kaya Kim",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${open_sans.variable} ${crimson_text.variable} ${unica_one.variable} scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  if (!theme) {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
                  }
                  if (localStorage.getItem('theme') === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  console.error(e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased leading-8 overflow-x-hidden">{children}</body>
    </html>
  );
}
