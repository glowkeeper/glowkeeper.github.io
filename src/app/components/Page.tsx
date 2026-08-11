'use client'

import React, { useContext, useEffect, type ReactNode} from "react"
 
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {
  StoreContext,
  StoreAction
} from '@/app/store/store'

type PageType = ({ title, path }: PageProps) => ReactNode

interface PageProps {
  title: string
  path: string
}

export const Page: PageType = ({ title, path }) => {

  const store = useContext(StoreContext)
  const currentTitle = store?.state.title
  const dispatch = store?.dispatch
  const content = store?.state.content[path]?.content ?? ''

  useEffect(() => {
    if (currentTitle !== title) {
      dispatch?.({
        type: StoreAction.TitleSet,
        payload: title,
      })
    }
  }, [currentTitle, dispatch, title])
  
  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  )
}
