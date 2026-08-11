import Link from 'next/link'

import { ThemeToggle } from '@/app/components/ThemeToggle'

export const Footer = () => (
  <footer>
    <div className="site-footer-inner">
      <small className="footer-copyright">
        © {new Date().getFullYear()} Dr Steve Huckle
      </small>

      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/about/contact">Contact</Link>
        <Link href="/about/cv">CV</Link>
        <Link href="/about/legal">Legal</Link>
      </nav>

      <ThemeToggle />
    </div>
  </footer>
)
