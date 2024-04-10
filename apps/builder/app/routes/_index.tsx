/* eslint-disable import/no-unresolved */
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { prisma } from '@CTAPKOB/db';
// import { StringDecoder } from 'node:string_decoder';
// import { resolveTxt } from 'node:dns';

export const meta: MetaFunction = () => {
  return [
    { title: 'CTAPKOB App' },
    {
      name: 'description',
      content: 'HI!',
    },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  const { MY_VARIABLE, MY_SECRET } = context.cloudflare.env;

  console.info(
    'context.cloudflare.ctx',
    JSON.stringify(context.cloudflare.env.HYPERDRIVE)
  );

  const connStr =
    context.cloudflare.env.HYPERDRIVE?.connectionString ??
    context.cloudflare.env.DEV_MODE_DATABASE_URL;
  console.log('connStr:', connStr);

  const user = await prisma(connStr, context.cloudflare.ctx.waitUntil); //.user.findFirst();

  console.log('END', user);

  return json({ MY_VARIABLE, MY_SECRET, user });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>
        eee CTAPKOB - secret: {data.MY_SECRET} - var: {data.MY_VARIABLE} - ray:{' '}
        {data.user?.email}
      </h1>
    </div>
  );
}
