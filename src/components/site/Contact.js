import { ContactHeader } from '../layout/headers/Contact'

import { siteSections } from '../../config'

export const Contact = () => {
  return (
    <>
      <ContactHeader />
      <main id={siteSections.contact.id}>
        <p>
          {siteSections.contact.title}
        </p>
      </main>
    </>
  );
}
