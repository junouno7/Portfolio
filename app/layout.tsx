import type { Metadata } from "next";
import { Enriqueta, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// Optimize font loading
const enriqueta = Enriqueta({
  variable: "--font-Enriqueta",
  subsets: ["latin"],
  weight: "400",
  display: 'swap', // Add font-display swap for better performance
  preload: true,
  adjustFontFallback: true, // Reduce layout shift
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-JetBrains-Mono",
  subsets: ["latin"],
  display: 'swap', // Add font-display swap for better performance
  preload: true,
  adjustFontFallback: true, // Reduce layout shift
});

export const metadata: Metadata = {
  title: "Juneau Kim",
  description: "Portfolio Juneau Kim",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: {
      url: "/apple-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = "dark"; // Default to "dark" or fetch from a cookie/environment variable.

  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${enriqueta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
