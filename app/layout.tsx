import '@/public/css/global.css';
import '@/public/css/header.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="CineCast" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-6DS2RYJKSB" />
      <Analytics />
    </html>
  );
}
