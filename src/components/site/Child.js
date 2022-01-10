import { Header } from '../layout/Header'

export const Child = (props) => {
    const { title, id } = props

    console.log('child', title, id)

    return (
        <>
        <Header />
        <main>
            <div
                id={id}
            >
                {title}
            </div>
        </main>
        </>
    );
}
