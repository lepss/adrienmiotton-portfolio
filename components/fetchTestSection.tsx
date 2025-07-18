import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getGlobals() {
  console.log(directus);

  return directus.request(readItems("Global"));
}

export async function FetchTestSection() {
  const global = await getGlobals();
  console.log(global);

  return (
    <div>
      <p>test</p>
      {/* <h1>{global.title}</h1>
      <p>{global.description}</p> */}
    </div>
  );
}
