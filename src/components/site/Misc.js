import { MiscHeader } from '../layout/headers/Misc'

import { siteSections } from '../../config'

export const Misc = () => {
  return (
    <>
      <MiscHeader />
      <main id={siteSections.misc.id}>
        <p>
          {siteSections.misc.title}
        </p>
      </main>
    </>
  );
}
