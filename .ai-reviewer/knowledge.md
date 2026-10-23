# implemented reviewer notes

## Architecture

This is a Vite-powered React 19 single-page application written in TypeScript. The entry point is `src/main.tsx`, which renders `App` under `StrictMode`; most page structure and interaction currently live in the single `src/App.tsx` component. Vite and TypeScript configuration are at the repository root, with styling imported from `src/index.css` and `src/App.css`.

## Conventions

- Use functional React components and hooks; `src/App.tsx` uses `function App()` and `useState`.
- Keep TypeScript types explicit where they constrain reusable values: `IconName` is a string-literal union, and `handleSubmit` uses `FormEvent<HTMLFormElement>` (`src/App.tsx`).
- Reusable visual elements are represented as local components or data-driven rendering. The `Icon` component centralizes SVG rendering, while `features.map(...)` creates the feature cards (`src/App.tsx`).
- Icons should use the existing `IconName` union and path lookup rather than introducing arbitrary icon strings (`src/App.tsx`).
- Preserve semantic HTML and accessibility attributes: the app uses `header`, `nav`, `main`, `section`, `article`, `footer`, labeled navigation, `aria-label`, `aria-hidden`, and `role="status"` (`src/App.tsx`).
- Use hash-based in-page navigation for the one-page sections (`#home`, `#about`, `#features`, `#contact`) rather than adding routing (`src/App.tsx`).
- Follow the existing ESLint setup for `*.ts` and `*.tsx`; it enables recommended JavaScript, TypeScript, React Hooks, and React Refresh rules (`eslint.config.js`). Build validation is `tsc -b && vite build` (`package.json`).
- Keep the app mounted through `createRoot` and retain `StrictMode` unless there is a concrete compatibility reason to change it (`src/main.tsx`).

## Intentional non-standard choices

- `src/App.tsx` is intentionally a largely monolithic page component; the current template keeps sections, content, and small reusable pieces together rather than splitting every section into separate files.
- The contact form does not send data to a backend. `handleSubmit` prevents default submission, relies on native constraint validation, and only displays a local success message (`src/App.tsx`).
- Branding and contact details are placeholder content (“My App”, `hello@myreactapp.com`, and a sample phone/location), consistent with this being a starter template (`src/App.tsx`).

## Watch out for

- Do not add feature entries with icon names outside `IconName`; that will break the typed `Icon` lookup (`src/App.tsx`).
- Preserve stable feature-card keys. The current map uses each feature title as its key; avoid switching to array indexes for reordered or dynamic content (`src/App.tsx`).
- Keep form controls labeled and `required` constraints intact; the success state currently depends on `checkValidity()` (`src/App.tsx`).
- Avoid introducing routing or external form submission without updating the current hash-navigation and local-form design.
- Changes to the root scripts or config should preserve the separate TypeScript build step and Vite React plugin (`package.json`, `vite.config.ts`).