import { PoetryHeader } from '../layout/headers/Poetry'

import { siteSections } from '../../config'

export const Poetry = () => {
  return (
    <>
      <PoetryHeader />
      <main id={siteSections.poetry.id}>
        <p>
          {siteSections.poetry.title}
        </p>
      </main>
    </>
  );
}
