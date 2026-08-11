'use client'

import React, { useEffect, useMemo, useReducer } from "react"

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'

import { loadContent } from "@/app/utils/content"

import {
  StoreContext,
  StoreAction,
  rootReducer,
  initialState
} from '@/app/store/store'

export const Site = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [state, dispatch] = useReducer(rootReducer, initialState)
  const store = useMemo(() => {
    return { state, dispatch }
  }, [state])

  useEffect(() => {
    let cancelled = false

    loadContent().then(content => {
      if (!cancelled) {
        dispatch({
          type: StoreAction.ContentSet,
          payload: content,
        })
      }
    }).catch(error => {
      console.error('Unable to load site content', error)
    })

    return () => {
      cancelled = true
    }
  }, [dispatch])

  return (    
    <StoreContext.Provider value={store}>
      <Header /> 
      <main>           
        {children}
      </main>  
      <Footer />
    </StoreContext.Provider>
  )
}
