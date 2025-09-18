import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (    
    <footer>  
      <div className="max-sm:hidden grid grid-flow-col cols-2 items-center justify-start gap-2">
        <p className="on-primary">Built using</p>
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
      <p className="on-primary">
        © 2025, Dr Steve Huckle
      </p>

      <div className="grid grid-flow-row auto-rows-auto items-start justify-center gap-2">
        <Link 
          className="on-primary"
          href="/about/contact"
        >
          contact
        </Link>
        <Link
          className="on-primary" 
          href="/about/cv"
        >
          cv
        </Link>            
        <Link 
          className="on-primary"
          href="/about/legal"
        >
          legal
        </Link>   
      </div>      
    </footer>
  )
}
