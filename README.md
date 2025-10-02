# nuxt-starters
My personal collection of starter templates for `nuxi init`.

The main goal of this project is to streamline the bootstrapping of all my projects and tests.

### How to use it

Execute it as using [`unjs/giget`](https://github.com/unjs/giget) templating:
```bash
npm create nuxt@latest my-project -- --packageManager pnpm -t gh:sandros94/nuxt-starters#ui --gitInit --no-modules
```

Or set `NUXI_INIT_REGISTRY=https://github.com/Sandros94/nuxt-starters` as your env variable to default to my templates.

# Templates available

- `module`: default + pnpm workspace
- `ui`: default + ui + eslint
