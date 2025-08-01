import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <div className="flex flex-col min-h-screen">
          <Header></Header>
          <main className="flex-1">
            {children}
          </main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
