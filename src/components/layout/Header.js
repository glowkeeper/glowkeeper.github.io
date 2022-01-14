import { useState } from 'react';

import {ContextMenu} from './ContextMenu';
import {MainMenu} from './MainMenu';

export const Header = (props) => {
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
        <div id="context-menu">
          {sections && <ContextMenu sections={sections}/>}
        </div>
        <button 
          id="footer-toggle"
          onClick={() => setIsOpen(false)}
        >
          ⌃
        </button>
        <div id="site-menu">
          {siteSections && <MainMenu sections={siteSections}/>}
        </div>
      </div>
    </header>
  );
}
