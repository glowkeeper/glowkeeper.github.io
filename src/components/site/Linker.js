import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'

export const Linker = (props) => {
    const { setTitle, sections } = props

    const [siteSections, setSiteSections] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
    
        if ( sections ) {

            const mySections = Object.keys(sections)
            if ( mySections.length === 1 ) {
                const myRoute = sections[`${mySections[0]}`].route
                navigate(myRoute, { replace: true })
            } else {
            
                const siteSections = Object.keys(sections).map((section, index) => {
                    const thisSection = sections[`${section}`]
                    const thisLink = thisSection.content
                    if ( !thisLink || /\.md$/.test(thisLink) ) {

                        // internal - section links or markdown
                        return (  
                            <Link 
                                className="content"
                                key={index}
                                to={thisSection.route}
                                onClick={() => {
                                  setTitle(thisSection.title)
                                }}
                            >
                                <div
                                    tabIndex={index}
                                    id={thisSection.id}
                                >
                                    <p>
                                        <span className="content-link-title">{thisSection.title}</span><br/>
                                        <span className="subText">{thisSection.subText}</span>
                                    </p>
                                </div>
                            </Link>    
                        )
                    } else if (/^http/.test(thisLink) || /^https/.test(thisLink)) {

                        // external url
                        return ( 
                            <a 
                                className="content"
                                key={index}
                                href={thisLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div
                                    tabIndex={index}
                                    id={thisSection.id}
                                >
                                    <p>
                                        <span className="content-link-title">{thisSection.title}</span><br/>
                                        <span className="subText">{thisSection.subText}</span>
                                    </p>
                                </div>        
                            </a> 
                        )
                    } else {

                        // shouldn't ever get here - unknown link type? Still...
                        return null
                    }
    
                    
                })

                setSiteSections(siteSections)
            }
        }

    }, [setTitle, sections, navigate])

    return (
        <>
            {siteSections}
        </>
    )
}
