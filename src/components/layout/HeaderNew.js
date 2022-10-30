import {MainMenuNew} from './MainMenuNew';

import { UIText } from '../../config'

export const HeaderNew = () => {

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
          <MainMenuNew />
        </div>
      </div>
    </header>
  );
}
