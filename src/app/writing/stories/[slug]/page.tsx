'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections, WritingSections } from '@/app/config'

// const StoriesPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params

const StoriesPage = () => {
  
  const path = usePathname()  
  return <Page title={siteSections.writing.siteSections[WritingSections.stories].title} path={path} />
}

export default StoriesPage
