import type { ReactNode } from 'react'

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'

export const Site = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)
