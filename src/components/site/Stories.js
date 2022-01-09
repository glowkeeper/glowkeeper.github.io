import { StoriesHeader } from '../layout/headers/Stories'

import { siteSections } from '../../config'

export const Stories = () => {
  return (
    <>
      <StoriesHeader />
      <main id={siteSections.stories.id}>
        <p>
          {siteSections.stories.title}
        </p>
      </main>
    </>
  );
}
