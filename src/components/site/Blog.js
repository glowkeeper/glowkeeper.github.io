import { BlogHeader } from '../layout/headers/Blog'

import { siteSections } from '../../config'

export const Blog = () => {
  return (
    <>
      <BlogHeader />
      <main id={siteSections.blog.id}>
        <p>
          {siteSections.blog.title}
        </p>
      </main>
    </>
  );
}
