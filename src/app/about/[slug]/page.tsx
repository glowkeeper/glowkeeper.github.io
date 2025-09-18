'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections } from '@/app/config'

// const AboutPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params

const AboutPage = () => {
  const path = usePathname() 
  return <Page title={siteSections.about.title} path={path} />
}

export default AboutPage
