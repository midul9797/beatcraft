import localFont from "next/font/local";
import "./globals.css";
import ViewCanvas from "@/components/ViewCanvas";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const leagueGothic = localFont({
  src: "./fonts/league-gothic.woff",
  variable: "--font-league-gothic",
  weight: "400",
});
export const metadata = {
  title: "Beatcraft",
  description: "Design your own beats",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${leagueGothic.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="overflow-x-hidden bg-main-dark">
        <main>
          {children}

          <ViewCanvas />
        </main>
      </body>
    </html>
  );
}
