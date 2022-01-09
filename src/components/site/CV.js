import { CVHeader } from '../layout/headers/CV'

import { siteSections } from '../../config'

export const CV = () => {
  return (
    <>
      <CVHeader />
      <main id={siteSections.cv.id}>
        <p>
          {siteSections.cv.id}
        </p>
      </main>
    </>
  );
}
