import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "ShopCart Online Store",
  description: "ShopCart online store, your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
