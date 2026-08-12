import Link from 'next/link'

import { ResponsiveLanding } from '@/app/components/ResponsiveLanding'
import { siteSections } from '@/app/config'

type SectionLandingProps = {
  imageAlt: string
  imageClassName: string
  imageSrc: string
  linkGridClassName: string
  section: string
  showImageOnMobile?: boolean
}

export const SectionLanding = ({
  imageAlt,
  imageClassName,
  imageSrc,
  linkGridClassName,
  section,
  showImageOnMobile,
}: SectionLandingProps) => {
  const sectionConfig = siteSections[section]

  return (
    <ResponsiveLanding
      imageAlt={imageAlt}
      imageClassName={imageClassName}
      imageSrc={imageSrc}
      showImageOnMobile={showImageOnMobile}
    >
      <p className="eyebrow">{sectionConfig.eyebrow ?? 'Explore'}</p>
      <h1>{sectionConfig.title}</h1>
      <p className="landing-deck">{sectionConfig.subText}</p>

      {sectionConfig.siteSections.map(subSection => (
        <section key={subSection.path} className="section-group">
          {sectionConfig.siteSections.length > 1 && <h2>{subSection.title}</h2>}
          <div className={`section-links ${linkGridClassName}`}>
            {Object.values(subSection.content).map(item => (
            <div key={item.id}>
                <Link href={`${subSection.path}/${item.endPoint}`}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </ResponsiveLanding>
  )
}
