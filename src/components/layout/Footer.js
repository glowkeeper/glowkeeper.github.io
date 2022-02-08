import { Link } from 'react-router-dom'

import {ThemeContext} from '../App';

import { System, UIText, UITextAbout } from '../../config'

export const Footer = () => {

  return (
    <ThemeContext.Consumer>
      {({theme, setTheme}) => (
        <footer>
          <div
            id="footer"
          >
            <div id="footer-content">
              <div>
                <Link 
                    className="footer"
                    to="/about/contact"
                >
                  {UITextAbout.contact}
                </Link> <br/>  
                <Link 
                    className="footer"
                    to="/about/cv"
                >
                  {UITextAbout.cv}
                </Link>   <br/>              
                <Link 
                    className="footer"
                    to="/about/info"
                >
                  {UITextAbout.info}
                </Link>   
              </div>
              <p>
                {UIText.copyright}
              </p>
              <button
                id="theme-toggle"
                onClick={() => {
                  const thisTheme = theme === System.lightTheme ? System.darkTheme : System.lightTheme;
                  setTheme(thisTheme)
                }}
              >
                {theme === System.lightTheme ? UIText.darkMode : UIText.lightMode }
              </button>
            </div>
          </div>
        </footer>
      )}
    </ThemeContext.Consumer>
  );
}
