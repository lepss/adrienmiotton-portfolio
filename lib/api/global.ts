// lib/api/global.ts
import directus from "@/lib/directus";
import type { Global } from "@/lib/schema";
import { readSingleton } from "@directus/sdk";

export async function fetchGlobal(): Promise<Global> {
  return directus.request(
    readSingleton("Global", {
      fields: ["id", "title", "description"],
    }),
  );
}
