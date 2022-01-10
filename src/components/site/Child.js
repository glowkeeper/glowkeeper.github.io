import React, { useEffect, useState } from "react";

import { Header } from '../layout/Header'

import ReactMarkdown from 'react-markdown'

export const Child = (props) => {
    const [markdown, setMarkdown] = useState("");

    const { src, id } = props

    useEffect(() => {
    fetch(src)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, [src]);

    return (
        <>
        <Header />
        <main>
            <div
                id={`${id}-md`}
            >
                <ReactMarkdown 
                    children={markdown}
                />
            </div>
        </main>
        </>
    );
}
