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
    <div className={`grid gap-4 md:h-[var(--main-height)] md:grid-cols-2 md:grid-rows-1 md:gap-16 ${showImageOnMobile ? 'min-h-[var(--main-height)] grid-rows-[auto_minmax(12rem,1fr)]' : ''}`}>
      <div className={`home-container order-2 md:order-1 ${showImageOnMobile ? '' : 'hidden md:block'}`}>
        <Image
          className={imageClassName}
          fill
          src={imageSrc}
          alt={imageAlt}
          priority={true}
        />
      </div>
      <div className="order-1 grid items-center md:order-2">
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
