import { SongsHeader } from '../layout/headers/Songs'

import { siteSections } from '../../config'

export const Songs = () => {
  return (
    <>
      <SongsHeader />
      <main id={siteSections.songs.id}>
        <p>
          {siteSections.songs.title}
        </p>
      </main>
    </>
  );
}
