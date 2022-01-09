import { Route, Routes } from "react-router"

import { Home } from '../site/Home';
import { About } from '../site/About';
import { Academia } from '../site/Academia';
import { Apps } from '../site/Apps';
import { Blog } from '../site/Blog';
import { Books } from '../site/Books';
import { Contact } from '../site/Contact';
import { CV } from '../site/CV';
import { FlashFiction } from '../site/FlashFiction';
import { Misc } from '../site/Misc';
import { Poetry } from '../site/Poetry';
import { Settings } from '../site/Settings';
import { Songs } from '../site/Songs';
import { Stories } from '../site/Stories';

import { LocalRoutes } from '../../config'

export const Main = () => {
  return (
    <Routes>
        <Route
            path={LocalRoutes.home}
            element={<Home />}
        />
        
        <Route
            path={LocalRoutes.about}
            element={<About />}
        />
        <Route
            path={LocalRoutes.cv}
            element={<CV />}
        />
        <Route
            path={LocalRoutes.settings}
            element={<Settings />}
        />
        <Route
            path={LocalRoutes.contact}
            element={<Contact />}
        />

        <Route
            path={LocalRoutes.academia}
            element={<Academia />}
        />
        <Route
            path={LocalRoutes.apps}
            element={<Apps />}
        />
        <Route
            path={LocalRoutes.blog}
            element={<Blog />}
        />
        <Route
            path={LocalRoutes.books}
            element={<Books />}
        />
        <Route
            path={LocalRoutes.flashFiction}
            element={<FlashFiction />}
        />
        <Route
            path={LocalRoutes.misc}
            element={<Misc />}
        />
        <Route
            path={LocalRoutes.poetry}
            element={<Poetry />}
        />
        <Route
            path={LocalRoutes.songs}
            element={<Songs />}
        />
        <Route
            path={LocalRoutes.stories}
            element={<Stories />}
        />
    </Routes>
  );
}
