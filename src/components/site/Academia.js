import { AcademiaHeader } from '../layout/headers/Academia'

import { siteSections } from '../../config'

export const Academia = () => {
  return (
    <>
      <AcademiaHeader />
      <main id={siteSections.academia.id}>
        <p>
          {siteSections.academia.title}
        </p>
      </main>
    </>
  );
}
