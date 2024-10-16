# nuxt-starters
My personal collection of starter templates for `nuxi init`.

The main goal of this project is to streamline the bootstrapping of all my projects and tests.

### How to use it

Execute it as using [`unjs/giget`](https://github.com/unjs/giget) templating:
```bash
nuxi init -t gh:sandros94/nuxt-starters#ui FOLDER_NAME
```

Or set `NUXI_INIT_REGISTRY=https://github.com/Sandros94/nuxt-starters` as your env variable to default to my templates.

# Templates available

- `layer`: default + eslint
- `module-devtools`: default
- `module`: default + pnpm workspace
- `ui`: default + eslint
- `v4`: default + ui + eslint
- `v3`: default + ui + vueuse + eslint (default one if no other template is specified)
- `v3-base`: default + eslint
