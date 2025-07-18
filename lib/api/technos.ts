// lib/api/technos.ts
import directus from "@/lib/directus";
import type { Techno } from "@/lib/schema";
import { readItems } from "@directus/sdk";

export async function fetchTechnos(): Promise<Techno[]> {
  const technos = await directus.request(
    readItems("technos", {
      fields: ["id", "name"],
      sort: ["id"],
    }),
  );
  return technos;
}
