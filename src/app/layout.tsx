import type { Metadata } from "next";
import { Inter, Literata } from "next/font/google"

import { Site } from '@/app/components/Site'
import { themeScript } from '@/app/utils/theme'

import "@/app/styles/globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
  display: 'swap',
})

const literata = Literata({
  variable: "--font-literata",
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Dr Steve Huckle',
    template: '%s | Dr Steve Huckle',
  },
  description: "Where code, creativity and curiosity meet. Steve Huckle is a computing educator, curriculum designer, software developer and writer sharing teaching, research and creative work.",
  metadataBase: new URL('https://huckle.studio'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr Steve Huckle',
    description: 'Where code, creativity and curiosity meet.',
    type: 'website',
    url: '/',
    images: [{
      url: '/social/home.jpg',
      width: 1200,
      height: 630,
      alt: 'Dr Steve Huckle — Where code, creativity and curiosity meet.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Steve Huckle',
    description: 'Where code, creativity and curiosity meet.',
    images: ['/social/home.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${inter.variable} ${literata.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Site>         
          {children}
        </Site>  
      </body>
    </html>
  );
}
