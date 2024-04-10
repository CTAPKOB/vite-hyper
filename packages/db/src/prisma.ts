import { Pool } from './pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './__generated__';

export const prisma = (
  connectionString: string,

  waitUntil: (promise: Promise<any>) => void
) => {
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  return {};
};
