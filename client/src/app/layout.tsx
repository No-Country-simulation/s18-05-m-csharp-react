import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const sanFranciscoFont = localFont({
  src: [
    {
      path: '../../public/assets/fonts/SF-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/SF-semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/SF-bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf'
})

export const metadata: Metadata = {
  title: "AdoPet App",
  description: "Una app para petlovers.",
  icons: [
    "/assets/icons/icon.png"
  ]
};

export const viewport: Viewport = { themeColor: "#5804B2" }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sanFranciscoFont.variable} antialiased`}  >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
