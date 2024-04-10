// @ts-ignore
import pg from 'pg';
import type { Client as Ct, Pool as Pt } from 'pg';

const { Client, Pool } = pg as any as { Client: typeof Ct; Pool: typeof Pt };

export { Client, Pool };
