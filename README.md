# Protocol Field Notes

A plain HTML/CSS field notes site for technical articles, deployed with Cloudflare Workers Static Assets.

## Files

- `public/index.html` - blog homepage
- `public/articles/rest-vs-grpc.html` - first article
- `public/assets/styles.css` - shared site styles
- `wrangler.toml` - Cloudflare Workers Static Assets configuration

## Cloudflare Workers

Use these settings if Cloudflare shows the newer Worker setup flow:

- Project name: `technical-blog`
- Build command: leave empty
- Assets directory: configured in `wrangler.toml` as `./public`

After pushing this repo to GitHub, connect the repository in Cloudflare and deploy from the `main` branch.

## Cloudflare Pages

If you use the classic Pages flow instead:

- Framework preset: `None`
- Build command: `exit 0`
- Build output directory: `public`
