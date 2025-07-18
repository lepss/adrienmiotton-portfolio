// hooks/useGlobal.ts
import { fetchGlobal } from "@/lib/api/global";
import type { Global } from "@/lib/schema";
import useSWR from "swr";

const fetcher = () => fetchGlobal();

export function useGlobal() {
  const { data, error, isLoading } = useSWR<Global>("global", fetcher);

  return {
    global: data,
    isLoading,
    isError: error,
  };
}
