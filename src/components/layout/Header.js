import { useState } from 'react';

import { Link } from "react-router-dom"

import {ContextMenu} from './ContextMenu';
import {MainMenu} from './MainMenu';

import {LocalRoutes, UIText} from '../../config'

export const Header = (props) => {
  const [isContextOpen, setIsContextOpen] = useState(false)
  const [isMainOpen, setIsMainOpen] = useState(false)
  const { title, siteSections, sections } = props

  console.log('site', siteSections)
  console.log('sect', sections)
  return (
    <header>
      <div
        id="header"
      >
        <div id="header-context">  
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
                <div>
                  <p id="menu-burger">≡</p>
                  {title} menu
                </div>
              </button>

          ): (

            <Link 
              className="context-link"
              to={LocalRoutes.home}
            >
              {UIText.home}
            </Link> 

          )}

        </div>  
        <div id="header-main"> 
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
            <div>
              <p id="menu-burger">≡</p>
              main menu
            </div>
          </button>
        </div>
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
