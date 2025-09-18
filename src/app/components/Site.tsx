'use client'

import React, { useState, useEffect, useMemo } from "react"

import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'

import { setContent } from "@/app/utils/content"

import {
  StoreContext,
  rootReducer,
  initialState,
  useReducerWithThunk
} from '@/app/store/store'

export const Site = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [state, dispatch] = useReducerWithThunk(rootReducer, initialState)
  const store = useMemo(() => {
    return { state: state, dispatch: dispatch }
  }, [state, dispatch]) 

  const [firstLoad, setFirstLoad] = useState<boolean>(true)


  useEffect(() => {
  
    if(firstLoad)
    {

      setContent(store)
      setFirstLoad(false)
    }  

  }, [store, firstLoad])

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
