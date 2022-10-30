import {MainMenu} from './MainMenu';

import { UIText } from '../../config'

export const Header = () => {

  return (
    <header>
      <div
        id="header"
      >
        <div id="header-context">  
          <h4>stuff</h4>
        </div> 
        <div id="header-title">{UIText.title}</div> 
        <div id="header-main"> 
          <MainMenu />
        </div>
      </div>
    </header>
  );
}
