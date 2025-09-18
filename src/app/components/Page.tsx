'use client'

import React, { useState, useContext, useEffect, type ReactNode} from "react"
 
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { setContent as setSiteContent } from "@/app/utils/content"

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

  const [content, setContent] = useState<string>('')
  
  const store = useContext(StoreContext)

  useEffect(() => {

    if(!content && store?.state.content?.hasOwnProperty(path)){

      const content = store?.state.content[path].content as string
      setContent(content)
    }  

  }, [store?.state.content, content, path])

  useEffect(() => {

    if(store?.state.title != title) 
    {
      store?.dispatch({
        type: StoreAction.TitleSet,
        payload: title,
      }) 
    }

  }, [store, title])  

  useEffect(() => {
    
    if (!content && store?.state.content?.hasOwnProperty(path)) {
      const content = store?.state.content[path].content as string
      setContent(content)
    } else if (!store?.state.content?.hasOwnProperty(path)) {
        setSiteContent(store)
    }
    
  }, [store, path, content])
  
  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  )
}
