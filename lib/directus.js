import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus("https://directus.adrienmiotton.com").with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  }),
);

export default directus;
