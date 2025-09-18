'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections, WritingSections } from '@/app/config'

// const HumourPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params

const HumourPage = () => {
  
  const path = usePathname()
  
  return <Page title={siteSections.writing.siteSections[WritingSections.humour].title} path={path} />
}

export default HumourPage
