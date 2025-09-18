'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections, WritingSections } from '@/app/config'

// const FlashFictionPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params

const FlashFictionPage = () => {

  const path = usePathname()  
  return <Page title={siteSections.writing.siteSections[WritingSections.flashFiction].title} path={path} />
}

export default FlashFictionPage
