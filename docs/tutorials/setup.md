## Getting Started
1. [Fork repository](https://github.com/splash-ink/businx/fork) and clone your fork locally
1. Install [Node.js (v10+)](https://nodejs.org/en/download/)
1. Install project dependencies: `npm install` or  `yarn install`
2. Run locally
   * `npm start` or `yarn start`
3. Build and deploy
   * `npm run build` or `yarn build`
   * `npm run deploy` or `yarn deploy`

## Updating

As features are added and fixes are made to the original monorepo (usually referred to as the 'upstream') your fork will become out of date. Here is a scripts workflow for keep your fork up to date to the latest version:

```shell
  npm run link-upstream
  # this should add the official repo as a remote called: 'upstream'.
  # you can see all remotes by entering:
  git remote -v
```

In a typical setup, you should see your fork on Github listed as origin, and the `splash-ink` original as upstream:

```shell
  origin          https://github.com/<your-username>/businx (fetch)
  origin          https://github.com/<your-username>/businx (push)
  upstream        https://github.com/splash-ink/businx (fetch)
  upstream        https://github.com/splash-ink/businx (push)
```

Whenever you believe your fork may be out of date, just run from your terminal:

```shell
  npm run sync
```

This will update your local master branch to match the original repo's master branch! It will then push those changes to your fork on GitHub, essentially keeping all 3 in sync!

## Reset project

If you want to re-install this project and continue contributing, just run the next command in the terminal

```shell
  npm run reset
```

This will remove `package-lock.json` and `node_modules`, then runs `npm install` followed by `npm run dev`.
