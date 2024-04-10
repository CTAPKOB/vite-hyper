import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'url';

export default defineConfig(({ mode }) => ({
  ssr: {},
  plugins: [remixCloudflareDevProxy(), remix(), tsconfigPaths()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),

    // process: JSON.stringify({ env: {} }),
  },

  build: {
    rollupOptions: {
      external: ['cloudflare:sockets'],
    },
  },

  resolve: {
    conditions: [
      'webstudio',
      'workerd',
      'worker',
      'module',
      'import',
      'browser',
      'default',
    ],

    alias: {
      events: 'node:events',
      crypto: 'node:crypto',
      // dns: 'node:dns',
      dns: fileURLToPath(new URL('app/dns.js', import.meta.url)),
      // fs: 'node:fs',
      fs: fileURLToPath(new URL('app/fs.js', import.meta.url)),

      // net: 'node:net',
      net: fileURLToPath(new URL('app/fs.js', import.meta.url)),
      // tls: 'node:tls',
      tls: fileURLToPath(new URL('app/fs.js', import.meta.url)),

      process: 'node:process',
      path: 'node:path',
      stream: 'node:stream',

      // string_decoder: 'node:string_decoder',
      string_decoder: fileURLToPath(
        new URL('app/string_decoder.js', import.meta.url)
      ),

      util: 'node:util',
      // '.prisma/client/edge':
      //  '../../node_modules/.pnpm/@prisma+client@5.12.1_prisma@5.12.1/node_modules/@prisma/client/edge.js',
    },
  },
}));
