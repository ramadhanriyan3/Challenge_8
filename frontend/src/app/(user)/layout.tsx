import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import MyNavbar from "@/components/navbar/myNavbar";
import Footer from "@/components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import MyButton from "@/components/button/button";
import AllNavbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binar Rent Car",
  description: "Description for your page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.6.0/css/glide.core.min.css"
          integrity="sha512-tYKqO78H3mRRCHa75fms1gBvGlANz0JxjN6fVrMBvWL+vOOy200npwJ69OBl9XEsTu3yVUvZNrdWFIIrIf8FLg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.6.0/css/glide.theme.css"
          integrity="sha512-rF+FkLhdJu8p6NNoi0y30W5xPessa8yC8/3u3p5/biTeDpsxik1XfrgfqZG/mUmJ/2cA73nArDuWnX2JQLvlmw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <AllNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
