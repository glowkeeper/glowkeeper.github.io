# Dr Steve Huckle — huckle.studio

This repository contains the source for [huckle.studio](https://huckle.studio/), Dr Steve Huckle's personal website. It brings together academic work, software projects, writing, and music in a statically exported Next.js site hosted by GitHub Pages.

## Technology

- Next.js 15 using the App Router
- React 19 and TypeScript
- Tailwind CSS 4 and DaisyUI
- Markdown rendering with `react-markdown` and `remark-gfm`
- pnpm for dependency management
- GitHub Actions and GitHub Pages for deployment

## Local development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
pnpm lint       # Run ESLint
pnpm lint:fix   # Run ESLint and apply safe fixes
pnpm build      # Create the static site in build/
pnpm start      # Serve the generated build locally
```

## Project structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages build and deployment
├── public/
│   └── assets/
│       ├── audio/                # Audio recordings
│       ├── docs/                 # PDFs and other documents
│       ├── images/               # Site and article images
│       ├── photos/               # Additional photographs
│       ├── posts/                # Markdown content, grouped by section
│       └── video/                # Video files
├── src/app/
│   ├── components/               # Shared layout, navigation and page components
│   ├── store/                    # Site content and page-title state
│   ├── styles/                   # Global, responsive and component CSS
│   ├── utils/content.ts          # Markdown content loader
│   ├── config.tsx                # Central site structure and content registry
│   └── ...                       # App Router routes and section landing pages
├── next.config.ts                # Static-export configuration
└── package.json                  # Dependencies and project scripts
```

## Content architecture

`src/app/config.tsx` is the central registry for the site. It defines the top-level navigation sections:

- About
- Academia
- Software
- Writing
- Music

Each section contains one or more subsections. Every content entry specifies:

- an internal ID;
- the title displayed in navigation and listings;
- supporting summary text;
- the URL endpoint; and
- the Markdown file beneath `public/assets/posts/`.

The same configuration drives the main menu, subsection menus, section landing-page links, Markdown loading, and static route generation. This keeps navigation and available pages aligned.

At runtime, `src/app/utils/content.ts` fetches the registered Markdown files from the public assets directory and stores them in the shared React context. `src/app/components/Page.tsx` selects the content for the current route and renders it using `react-markdown`, with GitHub Flavoured Markdown enabled through `remark-gfm`.

## Routes and static generation

The project uses the Next.js App Router beneath `src/app/`. Top-level section pages such as `/about`, `/academia`, and `/writing` have purpose-built responsive layouts.

Individual content pages use dynamic `[path]` route segments. Their `generateStaticParams()` functions read the relevant entries from `config.tsx`, allowing Next.js to generate every registered route during the static build. Examples include:

```text
/about/cv
/academia/publications
/software/apps/calculator
/writing/poetry/winter
/songs/echo-chamber
```

Because the site uses a static export, a new endpoint must be registered in `config.tsx` so that its route is generated during the build.

## Adding content

To add a new article, poem, song, or other content page:

1. Add a Markdown file in the appropriate directory beneath `public/assets/posts/`.
2. Add any referenced images, audio, video, or documents beneath the matching `public/assets/` directory.
3. Add an entry to the appropriate subsection in `src/app/config.tsx`.
4. Run `pnpm build` to confirm that the endpoint is generated successfully.

A typical configuration entry looks like this:

```tsx
example: {
  id: "poetry-example",
  title: "example",
  subText: "a short description",
  endPoint: "example",
  content: "/assets/posts/writing/poetry/example.md"
}
```

Use root-relative asset URLs inside Markdown, for example:

```markdown
![Description](/assets/images/example.jpg)

[Listen to the recording](/assets/audio/example.mp3)
```

## Layout and styling

`src/app/layout.tsx` supplies the root document metadata and wraps all routes in the shared `Site` component. `Site` provides the header, slide-in navigation, content store, main page area, and footer.

Global styles are assembled in `src/app/styles/globals.css`. The remaining stylesheets separate typography, navigation, layout, images, tables, header, and footer concerns. Colour and sizing tokens are defined in `variables.css`, including light and dark colour schemes. Responsive layouts primarily use Tailwind utility classes, with custom CSS where required.

## Static export and deployment

`next.config.ts` configures Next.js with:

- `output: 'export'` for a fully static site;
- `distDir: 'build'` for generated output; and
- unoptimised Next.js images, which are compatible with static hosting.

The custom domain is declared in `CNAME` as `huckle.studio`. The build script copies that file into the generated `build/` directory. `public/.nojekyll` prevents GitHub Pages from processing the exported site as Jekyll content.

The workflow in `.github/workflows/deploy.yml` runs whenever changes are pushed to `master`, and can also be started manually. It:

1. checks out the repository;
2. detects pnpm and installs dependencies;
3. runs the Next.js static build;
4. uploads `build/` as the Pages artifact; and
5. deploys the artifact to GitHub Pages.

Changes are live after the GitHub Pages deployment job completes successfully.
