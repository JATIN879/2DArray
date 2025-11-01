import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/context/BookingContext";

export const metadata: Metadata = {
  title: "Ola - Book Rides Online",
  description: "Book affordable and reliable rides with Ola. Choose from Mini, Sedan, SUV, and Auto options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <BookingProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
