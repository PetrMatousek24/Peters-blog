import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog created by Petr",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased`}>
        <Header />
        <main className="py-4 px-4 md:px-16 lg:px-32 xl:px-64 2xl:px-72">
          {children}
        </main>
      </body>
    </html>
  );
}
