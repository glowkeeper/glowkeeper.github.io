import {ContextMenu} from './ContextMenu';
import {MainMenu} from './MainMenu';

export const Header = (props) => {
  const { siteSections, sections } = props

  //console.log(sections)
  return (
    <header>
      <div id="context-menu">
        {sections && <ContextMenu sections={sections} id="navbar-button" />}
      </div>
      <>&nbsp;</>

      <div id="site-menu">
        {siteSections && <MainMenu sections={siteSections} id="site-menu" />}
      </div>
    </header>
  );
}
