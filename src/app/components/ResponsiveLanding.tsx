import type { ReactNode } from 'react'

import { responsiveImage } from '@/app/utils/responsiveImages'

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
  const image = responsiveImage(imageSrc)

  return (
    <div className={`responsive-landing grid gap-5 md:min-h-[var(--main-height)] md:grid-cols-2 md:grid-rows-1 md:gap-16 ${showImageOnMobile ? 'min-h-[var(--main-height)] grid-rows-[auto_minmax(12rem,1fr)]' : ''}`}>
      <div className={`home-container landing-media order-2 md:order-1 ${showImageOnMobile ? '' : 'hidden md:block'}`}>
        <picture>
          <img
            alt={imageAlt}
            className={imageClassName}
            decoding="async"
            fetchPriority={showImageOnMobile ? 'high' : 'auto'}
            height={image.height}
            loading={showImageOnMobile ? 'eager' : 'lazy'}
            sizes="(max-width: 767px) calc(100vw - 2rem), calc(50vw - 3rem)"
            src={image.src}
            srcSet={image.srcSet}
            width={image.width}
          />
        </picture>
      </div>
      <div className="landing-content order-1 grid items-center md:order-2">
        <div className="landing-content-inner">
          {children}
        </div>
      </div>
    </div>
  )
}
