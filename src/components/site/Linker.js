import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { Link } from "react-router-dom"

import { Header } from '../layout/Header'

export const Linker = (props) => {
    const { siteSections, sections } = props

    console.log('linker sections', siteSections, sections)

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
        <Header siteSections={siteSections} sections={sections}/>
        <main>
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
        </main>
        </>
    );
}
