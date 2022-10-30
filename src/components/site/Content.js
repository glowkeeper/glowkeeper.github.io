import React, { useEffect, useState } from "react";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Content = (props) => {

    const { setIsMenuOpen, content, id } = props

    const [markdown, setMarkdown] = useState("");

    
    
    useEffect(() => {
        fetch(content)
            .then((res) => res.text())
            .then((text) => {
                setIsMenuOpen(false)
                setMarkdown(text)
            });
    }, [setIsMenuOpen, content]);

    return (
        <div
            id={`${id}-md`}
        >
            <ReactMarkdown 
                children={markdown}
                remarkPlugins={[remarkGfm]}
            />
        </div>
    );
}
