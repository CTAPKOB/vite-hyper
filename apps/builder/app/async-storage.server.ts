/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AsyncLocalStorage } from 'node:async_hooks';

type AsyncContext = {
  rayId: string | null;
  test: number;
};

export const als = (): AsyncLocalStorage<AsyncContext> => {
  // @ts-ignore
  globalThis.asyncLocalStorage =
    // @ts-ignore
    globalThis.asyncLocalStorage ?? new AsyncLocalStorage<AsyncContext>();

  // @ts-ignore
  return globalThis.asyncLocalStorage;
};

export const getRayId = () => {
  const store = als().getStore();
  return store?.rayId ?? null;
};

export const getTest = () => {
  const store = als().getStore();
  if (store == null) {
    return -1;
  }

  return store?.test ?? 0;
};
