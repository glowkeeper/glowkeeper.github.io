'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections, WritingSections } from '@/app/config'

// const ReportsPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params
  
const ReportsPage = () => {

  const path = usePathname()  
  return <Page title={siteSections.writing.siteSections[WritingSections.reports].title} path={path} />
}

export default ReportsPage
