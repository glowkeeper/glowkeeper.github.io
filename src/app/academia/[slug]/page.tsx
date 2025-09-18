'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections } from '@/app/config'

// const AcademiaPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params

const AcademiaPage = () => {  
  const path = usePathname()  
  return <Page title={siteSections.academia.title} path={path} />
}

export default AcademiaPage
