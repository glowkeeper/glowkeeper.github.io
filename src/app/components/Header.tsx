import Link from 'next/link'

import { Menu } from '@/app/components/Menu'

export const Header = () => (
  <header>
    <div className="site-header-inner">
      <Link className="header-brand" href="/" aria-label="Dr Steve Huckle — home">
        <span className="site-title">Dr Steve Huckle</span>
        <span className="brand-mark" aria-hidden="true">SH</span>
      </Link>
      <Menu />
    </div>
  </header>
)
