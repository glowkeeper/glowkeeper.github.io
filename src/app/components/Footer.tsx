import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (    
    <footer>  
      <div className="footer-built-with hidden md:grid grid-flow-col cols-2 items-center justify-start gap-2">
        <p className="footer-item on-secondary">Built using</p>
        <Link
          href="https://nextjs.org/"
        >
          <Image
            width="50"
            height="50"
            src="/assets/images/nextLogo.png"
            alt="Next.JS"
          />        
        </Link>
      </div> 
      <small className="footer-copyright on-secondary">
        © {new Date().getFullYear()} Dr Steve Huckle
      </small>

      <nav className="footer-links" aria-label="Footer navigation">
        <Link 
          className="on-secondary"
          href="/about/contact"
        >
          contact
        </Link>
        <Link
          className="on-secondary"
          href="/about/cv"
        >
          cv
        </Link>            
        <Link 
          className="on-secondary"
          href="/about/legal"
        >
          legal
        </Link>   
      </nav>
    </footer>
  )
}
