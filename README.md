# WHATS NEEDED

following should work

```bash
# Directory ./apps/builder
pnpm build
pnpm start
# then open in browser
```

```bash
pnpm build
rm -rf dist
pnpm wrangler pages functions build --node-compat --outdir dist/_worker.js

# pnpm wrangler pages functions build --compatibility-flags="nodejs_compat"  --outdir dist/_worker.js

cp -r ./build/client/* ./dist/


CLOUDFLARE_ACCOUNT_ID=4453161ad26e32a617c6c6d4b837c9d9 pnpm wrangler pages deploy --no-bundle ./dist
```
