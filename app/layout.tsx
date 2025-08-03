import { brandName } from "@/config/config";
import QueryClientProvider from "@/context/react-query/QueryClientProvider";
import { ThemeProvider } from "@/context/theme/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    (process.env.VERCEL_URL as string) || "http://localhost:3000"
  ),
  keywords: ["Keyword 1", "Keyword 2", "Keyword 3"],
  title: brandName,
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader />
        <QueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
