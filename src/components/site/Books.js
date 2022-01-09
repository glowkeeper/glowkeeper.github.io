import { BooksHeader } from '../layout/headers/Books'

import { siteSections } from '../../config'

export const Books = () => {
  return (
    <>
      <BooksHeader />
      <main id={siteSections.books.id}>
        <p>
          {siteSections.books.title}
        </p>
      </main>
    </>
  );
}
