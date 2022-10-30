import { Menu } from './Menu';

import { UIText } from '../../config'

export const Header = (props) => {

  const { title, setTitle, isMenuOpen, setIsMenuOpen } = props

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
          <Menu 
            setTitle={setTitle}
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
    </header>
  );
}
