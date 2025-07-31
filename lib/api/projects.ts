// lib/api/projects.ts
import directus from "@/lib/directus";
import type { Project } from "@/lib/schema";
import { readItems } from "@directus/sdk";

export async function fetchProjects(): Promise<Project[]> {
  const projects = await directus.request(
    readItems("Projects", {
      fields: ["id", "title", "image", "content", "url", "technos"],
      sort: ["id"],
    }),
  );
  return projects;
}
