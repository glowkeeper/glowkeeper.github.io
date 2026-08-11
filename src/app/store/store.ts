'use client'

import React from 'react'

import type { SiteContent } from '@/app/store/types'

export type Store = {
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null

export const StoreContext = React.createContext<Store>(null)

export enum StoreAction {
  ContentInit = 'content/init',
  ContentAdd = 'content/add',
  ContentSet = 'content/set',
  TitleInit = 'title/init',
  TitleSet = 'title/set'
}

export type ContentAction = {
  type: StoreAction
  payload: SiteContent
}

export type TitleAction = {
  type: StoreAction
  payload: string
}

export type AppAction =
  | ContentAction
  | TitleAction

export type AppState = {
  content: SiteContent
  title: string
}

export const initialState: AppState = {
  content: {} as SiteContent,
  title: '',
}

export const contentReducer = (state: SiteContent, action: AppAction): SiteContent => {
  switch (action.type) {
    case StoreAction.ContentInit:
      return action.payload as SiteContent
    case StoreAction.ContentAdd:
      const newState = {...state, ...action.payload as SiteContent}
      //console.log('new content state', newState)
      return newState
    case StoreAction.ContentSet:
      //console.log('got content', action.payload)
      return (action as ContentAction).payload
    default:
      return state
  }
}

export const titleReducer = (state: string, action: AppAction): string => {
  switch (action.type) {
    case StoreAction.TitleInit:
      return action.payload as string
    case StoreAction.TitleSet:
      return (action as TitleAction).payload
    default:
      return state
  }
}

const combineReducers = (reducers: {
  content: (state: SiteContent, action: AppAction) => SiteContent
  title: (state: string, action: AppAction) => string
}) => {
  return (state: AppState = initialState, action: AppAction): AppState => {
    return {
      content: reducers.content(state.content, action),
      title: reducers.title(state.title, action),
    }
  }
}

export const rootReducer = combineReducers({
  content: contentReducer,
  title: titleReducer,
})
