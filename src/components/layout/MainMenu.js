import { Link } from "react-router-dom"

export const MainMenu = (props) => {
  const {sections} = props

  // console.log('my sections', sections)

  return (
    <nav id="main-nav">
      <a href="#close">×</a>
      {Object.keys(sections).map((section, index) => {
        const thisSection = sections[`${section}`]
        return (  
            <Link 
                className="content"
                key={index}
                to={thisSection.route}
            >
                <div
                    tabIndex={index}
                    id={thisSection.id}
                >
                    {thisSection.title}
                </div>
            </Link>    
        )
      })}
    </nav>
  );
}
