import { AboutHeader } from '../layout/headers/About'

import { siteSections } from '../../config'

export const About = () => {
  return (
    <>
      <AboutHeader />
      <main id={siteSections.about.id}>
        <p>
          {siteSections.about.title}
        </p>
      </main>
    </>
  );
}
