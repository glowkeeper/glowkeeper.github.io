import { useState } from 'react';

import { Link } from "react-router-dom"

import {ContextMenu} from './ContextMenu';
import {MainMenu} from './MainMenu';

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
        <div className="header-content">            
          <button
            className="context-link"
            onClick={() => setIsContextOpen(!isContextOpen)}
          >
            context menu
          </button>
          <button
            className="main-link"
            onClick={() => setIsMainOpen(!isMainOpen)}
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
        {
          <>       
            <div className="context-menu">
              {sections && 
                <ContextMenu 
                  sections={sections}
                  setIsOpen={setIsContextOpen}
                  isOpen={isContextOpen}
                />
              }
            </div> 
            <div className="site-menu">
              {siteSections && 
                <MainMenu 
                  sections={siteSections} 
                  setIsOpen={setIsMainOpen}
                  isOpen={isMainOpen}
                />
              }
            </div>  
          </> 
        }
      </div>       
    </header>
  );
}
