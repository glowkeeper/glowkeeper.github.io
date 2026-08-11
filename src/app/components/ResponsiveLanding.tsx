import Image from 'next/image'
import type { ReactNode } from 'react'

type ResponsiveLandingProps = {
  children: ReactNode
  imageAlt: string
  imageClassName: string
  imageSrc: string
  showImageOnMobile?: boolean
}

export const ResponsiveLanding = ({
  children,
  imageAlt,
  imageClassName,
  imageSrc,
  showImageOnMobile = true,
}: ResponsiveLandingProps) => {
  return (
    <div className={`responsive-landing grid gap-5 md:h-[var(--main-height)] md:grid-cols-2 md:grid-rows-1 md:gap-16 ${showImageOnMobile ? 'min-h-[var(--main-height)] grid-rows-[auto_minmax(12rem,1fr)]' : ''}`}>
      <div className={`home-container landing-media order-2 md:order-1 ${showImageOnMobile ? '' : 'hidden md:block'}`}>
        <Image
          className={imageClassName}
          fill
          src={imageSrc}
          alt={imageAlt}
          priority={true}
        />
      </div>
      <div className="landing-content order-1 grid items-center md:order-2">
        <div className="landing-content-inner">
          {children}
        </div>
      </div>
    </div>
  )
}
