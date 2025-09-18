'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections } from '@/app/config'

// const SongsPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params

const SongsPage = () => {

  const path = usePathname()  
  return <Page title={siteSections.music.title} path={path} />
}

export default SongsPage
