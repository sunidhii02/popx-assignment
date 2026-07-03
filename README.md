# PopX

PopX is a React single-page app built with Vite and Material UI. It provides a sign-up flow, sign-in form, and account settings page with a clean mobile-first layout.

## Project structure

- `src/main.jsx` — app entry point
- `src/App.jsx` — route definitions
- `src/pages/Welcome.jsx` — landing page
- `src/pages/SignIn.jsx` — login form
- `src/pages/Createacc.jsx` — account creation form
- `src/pages/AccountSetting.jsx` — account settings and profile screen
- `src/components/CustomInput.jsx` — shared styled input component
- `src/App.css` — global layout and component styles

## Run locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available routes

- `/` — welcome page
- `/sign-in` — login form
- `/sign-up` — create account form
- `/account-settings` — account settings page

## Notes

- The project uses the Rubik font for typography.
- Material UI theming is configured in `src/main.jsx`.
- The account creation and login buttons are disabled until required fields are filled.
