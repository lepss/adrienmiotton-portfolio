import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getGlobals() {
  return directus.request(readItems("global"));
}

export const fetchTestSection = async () => {
  const global = await getGlobals();
  return (
    <div>
      {/* <h1>{global.title}</h1>
      <p>{global.description}</p> */}
    </div>
  );
};
