import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'

import { Header } from '../layout/Header'

export const Linker = (props) => {
    const { title, siteSections, sections } = props

    const navigate = useNavigate()

    useEffect(() => {

        if ( sections ) {

            const mySections = Object.keys(sections)
            if ( mySections.length === 1 ) {
                const myRoute = sections[`${mySections[0]}`].route
                navigate(myRoute, { replace: true })
            }
        }

    }, [sections, navigate])

    return (
        <>
        <Header title={title} siteSections={siteSections} sections={sections}/>
        <main>
            {Object.keys(sections).map((section, index) => {
                const thisSection = sections[`${section}`]
                const thisLink = thisSection.content
                if ( !thisLink || /\.md$/.test(thisLink) ) {

                    // internal - section links or markdown
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
                                {thisSection.title}
                            </div>        
                        </a> 
                    )
                } else {

                    // shouldn't ever get here - unknown link type? Still...
                    return null
                }
 
                
            })}
        </main>
        </>
    );
}
