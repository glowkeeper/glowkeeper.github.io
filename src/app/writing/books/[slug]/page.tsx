'use client'
 
import { usePathname } from 'next/navigation'

import { Page } from '@/app/components/Page'

import { siteSections, WritingSections } from '@/app/config'

// const BooksPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params

const BooksPage = () => {
  
  const path = usePathname()  
  return <Page title={siteSections.writing.siteSections[WritingSections.books].title} path={path} />
}

export default BooksPage
