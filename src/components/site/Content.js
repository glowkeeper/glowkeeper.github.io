import React, { useEffect, useState } from "react";

import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Content = (props) => {
    const [markdown, setMarkdown] = useState("");

    const { title, siteSections, content, id } = props
    
    useEffect(() => {
        fetch(content)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, [content]);

    // console.log('blah', siteSections, content, id)

    return (
        <>
            <Header title={title} siteSections={siteSections} />
            <main>
                <div
                    id={`${id}-md`}
                >
                    <ReactMarkdown 
                        children={markdown}
                        remarkPlugins={[remarkGfm]}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
