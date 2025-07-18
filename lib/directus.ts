// import type { Schema } from "@/lib/schema";
import type { Schema } from "@/lib/schema";
import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus<Schema>(
  "https://directus.adrienmiotton.com",
).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  }),
);

export default directus;
