import { FlashFictionHeader } from '../layout/headers/FlashFiction'

import { siteSections } from '../../config'

export const FlashFiction = () => {
  return (
    <>
      <FlashFictionHeader />
      <main id={siteSections.flashFiction.id}>
        <p>
          {siteSections.flashFiction.title}
        </p>
      </main>
    </>
  );
}
