import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import "@/styles/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
