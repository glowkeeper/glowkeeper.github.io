import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { Link } from "react-router-dom"

import { Header } from '../layout/Header'

export const Parent = (props) => {
    const [sectionKeys, setSectionKeys] = useState([]) 
    const { sections } = props

    const navigate = useNavigate()

    useEffect(() => {

        if ( sections ) {

            const mySections = Object.keys(sections)
            if ( mySections.length === 1 ) {
                const myRoute = sections[`${mySections[0]}`].route
                console.log('got here', myRoute)
                navigate(myRoute)
            } else {
                setSectionKeys(mySections)
            }

        }

    }, [sections, navigate])

    return (
        <>
        <Header sections={sections}/>
        <main>
            {sectionKeys.map((section, index) => {
            const thisSection = sections[`${section}`]
            return (  
                <Link key={index} to={thisSection.route}>
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
