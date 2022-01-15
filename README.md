# GitHub user search

[![Netlify Status](https://api.netlify.com/api/v1/badges/343b11d6-6277-4c7d-a752-e2b0ec234954/deploy-status)](https://app.netlify.com/sites/allanjeremy-github-user-search/deploys)

This project is built using VueJS 3.x, Quasar & Typescript.

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

# Directory structure

## This directory structure documentation has been copy pasted from the quasar documentation to help with navigating this project.

title: Directory Structure
desc: The structure of a Quasar app with explanations for each folder and file.

---

This is the structure of a project with all modes installed. There's no reason to be intimidated though!

::: tip
If you are a beginner, all you'll need to care about is `/quasar.conf.js` (Quasar App Config file), `/src/router`, `/src/layouts`, `/src/pages` and optionally `/src/assets`.
:::

```bash
.
├── public/                  # pure static assets (directly copied)
├── src/
│   ├── assets/              # dynamic assets (processed by webpack)
│   ├── components/          # .vue components used in pages & layouts
│   ├── css/                 # CSS/Sass/... files for your app
|   |   ├── app.sass
|   │   └── quasar.variables.sass # Quasar Sass variables for you to tweak
│   ├── layouts/             # layout .vue files
│   ├── pages/               # page .vue files
│   ├── boot/                # boot files (app initialization code)
│   ├── router/              # Vue Router
|   |   ├── index.js         # Vue Router definition
|   │   └── routes.js        # App Routes definitions
│   ├── store/               # Vuex Store
|   |   ├── index.js         # Vuex Store definition
|   │   ├── <folder>         # Vuex Store Module...
|   │   └── <folder>         # Vuex Store Module...
│   ├── App.vue              # root Vue component of your App
│   └── index.template.html  # Template for index.html                # BEX (browser extension) specific code (like "main" thread)
├── dist/                    # where production builds go
│   ├── spa/                 # example when building SPA
│   ├── ssr/                 # example when building SSR
│   ├── electron/            # example when building Electron
│   └── ....
├── quasar.conf.js           # Quasar App Config file
├── babel.config.js          # Babeljs config
├── .editorconfig            # editor config
├── .eslintignore            # ESlint ignore paths
├── .eslintrc.js             # ESlint config
├── .postcssrc.js            # PostCSS config
├── .gitignore               # GIT ignore paths
├── package.json             # npm scripts and dependencies
└── README.md                # readme for your website/App
```
