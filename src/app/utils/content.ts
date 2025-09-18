import { siteSections } from '@/app/config'

import {
  StoreAction
} from '@/app/store/store'

import type { Content, SiteContent, Site as TopLevel } from '@/app/store/types'
import type { Store } from '@/app/store/store'

export const setContent = (store: Store) => {

    Object.keys(siteSections as TopLevel).forEach(section => {
    
        //console.log('section', section)
        
        siteSections[section].siteSections.forEach(subSection => {
            //console.log('sub section', subSection)

            Object.keys(subSection.content).forEach(item => {
           

                //console.log('content', item)
                const thisItem: Content = subSection.content[item]
                const route = `${subSection.path}/${thisItem.endPoint}`
                fetch(thisItem.content)
                .then(res => res.text())
                .then(text => { 

                    // console.log('item', thisItem)
                    const thisContent: SiteContent = {
                        [route]: {
                            id: thisItem.id,
                            title: thisItem.title,
                            subText: thisItem.subText,
                            content: text
                        }
                    }
                    
                    store?.dispatch({
                        type: StoreAction.ContentAdd,
                        payload: thisContent,
                    })
                })
            })
        })
    })
} 