import { MainMenu } from './MainMenu';

import { UIText } from '../../config'

export const Header = (props) => {

  const { title, setTitle } = props

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
          <MainMenu 
            setTitle={setTitle}
          />
        </div>
      </div>
    </header>
  );
}
