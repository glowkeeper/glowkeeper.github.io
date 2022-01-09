import { SettingsHeader } from '../layout/headers/Settings'

import { siteSections } from '../../config'

export const Settings = () => {
  return (
    <>
      <SettingsHeader />
      <main id={siteSections.settings.id}>
        <p>
          {siteSections.settings.title}
        </p>
      </main>
    </>
  );
}
