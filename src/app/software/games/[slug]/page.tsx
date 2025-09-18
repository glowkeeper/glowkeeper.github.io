'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections, SoftwareSections } from '@/app/config'

// const GamesPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params

const GamesPage = () => {
  
  const path = usePathname()  
  return <Page title={siteSections.software.siteSections[SoftwareSections.games].title} path={path} />
}

export default GamesPage
