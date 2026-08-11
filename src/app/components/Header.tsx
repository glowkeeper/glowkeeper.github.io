'use client'

import React, { useContext, useEffect} from "react"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Menu } from './Menu'

import {
  StoreContext,
  StoreAction
} from '@/app/store/store'

export const Header = () => {
    
    const store = useContext(StoreContext)
    const path = usePathname()

    const title = store?.state.title ?? ''
    const dispatch = store?.dispatch

    useEffect(() => {
  
      if (path === '/' && title !== 'home')
      {
        dispatch?.({
          type: StoreAction.TitleSet,
          payload: 'home',
        }) 
      }
  
    }, [dispatch, path, title])

  return (
    <header>
        <div className="header-context grid items-center justify-start">
          <p className="page-title">{title}</p>
        </div>
        <div className="header-brand grid items-center justify-center">
          <Link href="/" aria-label="Dr Steve Huckle — home">
            {path === '/' ? (
              <h1 className="site-title">Dr Steve Huckle</h1>
            ) : (
              <p className="site-title">Dr Steve Huckle</p>
            )}
          </Link>
        </div>
        <Menu />
    </header>
  )
}
