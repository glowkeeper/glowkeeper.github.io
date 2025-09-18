'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections, WritingSections } from '@/app/config'

// const PoetryPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params
  
const PoetryPage = () => {

  const path = usePathname()  
  return <Page title={siteSections.writing.siteSections[WritingSections.poetry].title} path={path} />
}

export default PoetryPage
