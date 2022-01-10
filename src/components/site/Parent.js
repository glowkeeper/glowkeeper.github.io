import { Link } from "react-router-dom"

import { Header } from '../layout/Header'

export const Parent = (props) => {

    const { sections } = props

    return (
        <>
        <Header sections={sections}/>
        <main>
            {Object.keys(sections).map((section, index) => {
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
