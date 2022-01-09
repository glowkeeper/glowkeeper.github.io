import { AppsHeader } from '../layout/headers/Apps'

import { siteSections } from '../../config'

export const Apps = () => {
  return (
    <>
      <AppsHeader />
      <main id={siteSections.apps.id}>
        <p>
          {siteSections.apps.title}
        </p>
      </main>
    </>
  );
}
