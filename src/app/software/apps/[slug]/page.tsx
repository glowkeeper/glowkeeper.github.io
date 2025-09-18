'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections, SoftwareSections } from '@/app/config'

// const AppsPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params

const AppsPage = () => {
  
  const path = usePathname()  
  return <Page title={siteSections.software.siteSections[SoftwareSections.apps].title} path={path} />
}

export default AppsPage
