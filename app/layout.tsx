import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dominik Janiak | Software Developer",
  description: "Portfolio of Dominik Janiak, a software developer specializing in C#, JavaScript, and TypeScript.",
  keywords: ["Dominik Janiak", "Software Developer", "C#", "JavaScript", "TypeScript", ".NET", "React", "Portfolio"],
  authors: [{ name: "Dominik Janiak" }],
  creator: "Dominik Janiak",
  metadataBase: new URL("https://dominikjaniak.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dominikjaniak.com",
    title: "Dominik Janiak | Software Developer",
    description: "Portfolio of Dominik Janiak, a software developer specializing in C#, JavaScript, and TypeScript.",
    siteName: "Dominik Janiak Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominik Janiak | Software Developer",
    description: "Portfolio of Dominik Janiak, a software developer specializing in C#, JavaScript, and TypeScript.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
        color: "#db2777",
      },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.png" color="#db2777" />
        <meta name="theme-color" content="#db2777" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
