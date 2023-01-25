# social-media-client
# Workflow-CA
[![Netlify Status](https://api.netlify.com/api/v1/badges/f153cc30-5bb8-4dd9-ace0-821cc3a8ea63/deploy-status)](https://app.netlify.com/sites/stiansto-workflow-ca/deploys)
[![Deploy static content to Pages](https://github.com/StianSto/Workflow-CA/actions/workflows/pages.yml/badge.svg)](https://github.com/StianSto/Workflow-CA/actions/workflows/pages.yml)
[![Automated e2e testing](https://github.com/StianSto/Workflow-CA/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/StianSto/Workflow-CA/actions/workflows/e2e-test.yml)
[![Automated unit testing](https://github.com/StianSto/Workflow-CA/actions/workflows/unit-test.yml/badge.svg)](https://github.com/StianSto/Workflow-CA/actions/workflows/unit-test.yml)

netlify deploy: https://stiansto-workflow-ca.netlify.app/ <br>
pages: https://stiansto.github.io/Workflow-CA/

## Built With

- HTML
- CSS
  - SASS
- JS

frameworks:
- bootstrap


## Getting Started

### Installing

1. Clone the repo:

```bash
git clone --branch workflow https://github.com/StianSto/Workflow-CA.git

// [OPTIONAL] open code from terminal
cd Workflow-CA
code -r .
```


2. install dependencies

```bash
npm i
```

pre-commit linting is turned of by default. to turn on go to: <br>
".husky/pre-commit" <br>
and remove "#" from "#npx lint-staged"


### Running
**these are commands and scripts that are useful in development**

live dev version:
```bash
npm run dev
```
preview build version
```bash
npm run preview
```
build production files (is ignored by .gitignore)
```
npm run build
```
