import Link from 'next/link'

import { ResponsiveLanding } from '@/app/components/ResponsiveLanding'
import type { SiteSection } from '@/app/types'

type SubsectionLandingProps = {
  heading: string
  imageAlt: string
  imageClassName: string
  imageSrc: string
  linkGridClassName?: string
  subsection: SiteSection
}

export const SubsectionLanding = ({
  heading,
  imageAlt,
  imageClassName,
  imageSrc,
  linkGridClassName = 'grid grid-cols-4 grid-flow-row auto-rows-fr gap-2',
  subsection,
}: SubsectionLandingProps) => (
  <ResponsiveLanding
    imageAlt={imageAlt}
    imageClassName={imageClassName}
    imageSrc={imageSrc}
  >
    <p className="eyebrow">{heading}</p>
    <h1>{subsection.title}</h1>
    <div className={`section-links ${linkGridClassName}`}>
      {Object.values(subsection.content).map(item => (
        <div key={item.id}>
          <Link href={`${subsection.path}/${item.endPoint}`}>
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  </ResponsiveLanding>
)
