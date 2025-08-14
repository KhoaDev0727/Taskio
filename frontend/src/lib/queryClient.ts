import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchJSON<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}
