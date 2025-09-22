export const metadata = {
  title: "Kovalchuk Sculptures LLC – Art Beyond Time",
  description: "UAE studio of Andrey Kovalchuk, State Prizes laureate and President of the Union of Artists of Russia. Monumental and contemporary sculpture in bronze, steel, and mixed media.",
  keywords: "Kovalchuk, sculpture, UAE, Dubai, monumental art, bronze sculpture, contemporary art, public art",
  openGraph: {
    title: "Kovalchuk Sculptures LLC",
    description: "Art Beyond Time – Monumental and contemporary sculpture studio in the UAE",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}