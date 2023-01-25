# social-media-client
# Workflow-CA
[![Automated E2E Testing](https://github.com/trine-marie-sandberg/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/trine-marie-sandberg/social-media-client/actions/workflows/e2e-test.yml)

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
