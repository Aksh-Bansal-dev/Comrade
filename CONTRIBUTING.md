# Contributing to Comrade

I want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting an issue
- Submitting a fix
- Proposing new features

## Code of Conduct

The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Standard Commit Messages

This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Please follow these steps to ensure your
commit messages are standardized:

- Commit messages should have this format:
  `<type>[optional scope]: <description>`
- Type should be `fix`(if fixed some bug), `feat`(if added new feature), `docs`(changes in documentation) or `test`(added new tests)
- Scope should be `bakku-server` or `mae` or `global` if your changes affects both.
- Description should be concise.

## Local Setup

- Fork and clone the repo.
- Run `git add remote upstream https://github.com/Aksh-Bansal-dev/Comrade.git`

#### Backend setup

- Install and run Mongodb.
- Run `cd bakku-server`
- Run `npm install` to install all dependencies.
- Run `npm run develop` to start the server

#### Frontend setup

- Run `cd mae`
- Run `npm install` to install all dependencies.
- Run `npm run dev` to start the server and visit [site](http://localhost:3000).

#### Before making PR

- Run `git fetch upstream` & `git rebase upstream/main` to fetch updated codebase into your local repo.
- Run `git checkout -b patch-<number of PR you've merged in this repo>`
- Test the frontend(mae) by running `npm run test` before making PR.

## License

By contributing to DogeHouse, you agree that your contributions will be licensed
under the [LICENSE file](LICENSE).
