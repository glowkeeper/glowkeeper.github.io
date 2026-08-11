'use client'

import { useContext, useEffect } from 'react'
import Link from 'next/link'

import { ResponsiveLanding } from '@/app/components/ResponsiveLanding'
import { siteSections } from '@/app/config'
import { StoreAction, StoreContext } from '@/app/store/store'

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
  const store = useContext(StoreContext)
  const currentTitle = store?.state.title
  const dispatch = store?.dispatch
  const sectionConfig = siteSections[section]

  useEffect(() => {
    if (currentTitle !== section) {
      dispatch?.({
        type: StoreAction.TitleSet,
        payload: section,
      })
    }
  }, [currentTitle, dispatch, section])

  return (
    <ResponsiveLanding
      imageAlt={imageAlt}
      imageClassName={imageClassName}
      imageSrc={imageSrc}
      showImageOnMobile={showImageOnMobile}
    >
      <h1>{sectionConfig.title}</h1>
      <p>{sectionConfig.subText}</p>

      {sectionConfig.siteSections.map(subSection => (
        <section key={subSection.path}>
          {sectionConfig.siteSections.length > 1 && <h2>{subSection.title}</h2>}
          <div className={linkGridClassName}>
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
