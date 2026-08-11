import type { Metadata } from "next";
import { Inter, Literata } from "next/font/google"

import { Site } from '@/app/components/Site'

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

const themeScript = `
  (() => {
    const saved = localStorage.getItem('huckle-theme');
    const theme = saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
  })();
`

export const metadata: Metadata = {
  title: "Dr Steve Huckle",
  description: "Where Code, Creativity and Curiosity Meet. Dr Steve Huckle is a writer, academic and educator exploring the spaces between technology, teaching and creative practice. At huckle.studio, he shares selected research, university work, and independent projects — from blockchain and decentralised systems to poetry, prose and pedagogy. Grounded in both industry and academia, his work reflects a thoughtful, curious approach to making and understanding.",
  metadataBase: new URL('https://huckle.studio'),
  openGraph: {
    title: 'Dr Steve Huckle',
    description: 'Where code, creativity and curiosity meet.',
    type: 'website',
    url: '/',
    images: [{
      url: '/og.jpg',
      width: 1731,
      height: 909,
      alt: 'Dr Steve Huckle — Where code, creativity and curiosity meet.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Steve Huckle',
    description: 'Where code, creativity and curiosity meet.',
    images: ['/og.jpg'],
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
