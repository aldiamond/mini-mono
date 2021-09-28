# mini-mono

A minimalist TypeScript monorepo scaffold. No lerna or nx. Only depends on npm, npm workspaces, modules aliases and the TypeScript compiler.

It is simple but is fiddly to add more shared libraries: need to update the root level `package.json`, `tsconfig.base.json` and `tsconfig.json` in obvious places.

This example consists of two libraries and one app. The app consumes both libraries. TSC generates a single dist directory and uses `module_alias` to resolve the module alias at runtime.

## Setup

At root level, to build and run.

```
npm install
npm run build
node dist/apps/app-a/src/index.js
```


