# Adfinitas Landing Page template repository

## What to do to serve my webapp in a domain subpath ?

You will have to simply change the `adapter` and `paths` configuration in `svelte.config.js`:

```js
adapter: adapter({
    pages: process.env.NODE_ENV === "production" ? "build/mysubpath" : undefined,
    assets: process.env.NODE_ENV === "production" ? "build/mysubpath" : undefined,
}),
paths: {
    base: process.env.NODE_ENV === "production" ? "/mysubpath" : undefined,
},
```

## How that repository was created

Run the following commands in the root of the repository:

```shell
npm init svelte@2.0.0-next.127 template-landing-page && cd template-landing-page
git init
npx svelte-add@latest tailwindcss --forms --typography
npm remove @sveltejs/adapter-auto && npm i -D @sveltejs/adapter-static@next
npx mrm@2 lint-staged
```

Then do the following:

- Change import from `adapter-auto` to `adapter-static` in file `svelte.config.js`.
