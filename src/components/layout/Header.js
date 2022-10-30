import { useState } from 'react';

import {ContextMenu} from './ContextMenu';
import {MainMenu} from './MainMenu';

import {UIText} from '../../config'

export const Header = (props) => {
  const { title, siteSections, sections } = props

  const [isMainOpen, setIsMainOpen] = useState(false)

  // console.log('is this reloaded?', title)
  // console.log('is this site?', siteSections)
  // console.log('is this sections?', sections)
  // console.log('is this open?', isMainOpen)

  return (
    <header>
      <div
        id="header"
      >
        <div id="header-context">  
          <h4>{title}</h4>
        </div> 
        <div id="header-title">{UIText.title}</div> 
        <div id="header-main"> 
          <button
            className="main-link"
            onClick={() => {
              const mainOpen = !isMainOpen
              setIsMainOpen(mainOpen)
            }}
          >
            <p id="menu-burger">≡</p>
          </button>
        </div>
      </div>
      {
        <>
          {sections && 
            <ContextMenu 
              title={title}
              sections={sections}
            />
          }
          {siteSections && 
            <MainMenu 
              sections={siteSections} 
              setIsOpen={setIsMainOpen}
              isOpen={isMainOpen}
            />
          }
        </> 
      }      
    </header>
  );
}
