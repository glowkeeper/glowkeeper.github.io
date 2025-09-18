import type { Metadata } from "next";
import { Raleway } from "next/font/google"

import { Site } from '@/app/components/Site'

import "@/app/styles/globals.css"

const raleway = Raleway({
  variable: "--font-raleway-sans",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Dr Steve Huckle",
  description: "Where Code, Creativity and Curiosity Meet. Dr Steve Huckle is a writer, academic and educator exploring the spaces between technology, teaching and creative practice. At huckle.studio, he shares selected research, university work, and independent projects — from blockchain and decentralised systems to poetry, prose and pedagogy. Grounded in both industry and academia, his work reflects a thoughtful, curious approach to making and understanding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={raleway.className}>
      <body
      >
        <Site>         
          {children}
        </Site>  
      </body>
    </html>
  );
}
