import {ContextMenu} from './ContextMenu';
import {MainMenu} from './MainMenu';

export const Header = (props) => {
  const { siteSections, sections } = props

  //console.log(sections)
  return (
    <header>
      <div id="context-menu">
        {sections && (
          <>
            <a href="#context-nav">context open</a>
            <ContextMenu sections={sections} />
          </>
        )}
      </div>
      <>&nbsp;</>

      <div id="site-menu">
        {siteSections && (
          <>
            <a href="#main-nav">main open</a>
            <MainMenu sections={siteSections} />
          </>
        )}
      </div>
    </header>
  );
}
