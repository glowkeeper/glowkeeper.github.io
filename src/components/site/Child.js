import React, { useEffect, useState } from "react";

import { Header } from '../layout/Header'

import ReactMarkdown from 'react-markdown'

export const Child = (props) => {
    const [markdown, setMarkdown] = useState("");

    const { path, id } = props

    useEffect(() => {
    fetch(path)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, [path]);

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
