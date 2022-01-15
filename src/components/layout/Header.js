import { useState } from 'react';

import { Link } from "react-router-dom"

import {ContextMenu} from './ContextMenu';
import {MainMenu} from './MainMenu';

import {LocalRoutes, UIText} from '../../config'

export const Header = (props) => {
  const [isContextOpen, setIsContextOpen] = useState(false)
  const [isMainOpen, setIsMainOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { siteSections, sections } = props

  //console.log(sections)
  return (
    <header>
      <button
        id="header-toggle"
        onClick={() => setIsOpen(true)}
      >
        ⌄
      </button>
      <div
        id="header"
        className={isOpen ? "open" : "close"}
      >
        <div>
          { sections ? (                    
            <button
              className="context-link"
              onClick={() => {
                const contextOpen = !isContextOpen
                setIsContextOpen(contextOpen)
                if ( contextOpen ) {
                  setIsMainOpen(false)
                }
              }}
            >
              context menu
            </button>

          ): (

            <Link 
              className="context-link"
              to={LocalRoutes.home}
            >
              {UIText.home}
            </Link> 

          )}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="main-link"
            onClick={() => {
              const mainOpen = !isMainOpen
              setIsMainOpen(mainOpen)
              if ( mainOpen ) {
                setIsContextOpen(false)
              }
            }}
          >
            main menu
          </button>
        </div>
        <button 
          id="header-toggle"
          onClick={() => setIsOpen(false)}
        >
          ⌃
        </button>
      </div>
      {
        <>
          {sections && 
            <ContextMenu 
              sections={sections}
              setIsOpen={setIsContextOpen}
              isOpen={isContextOpen}
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
