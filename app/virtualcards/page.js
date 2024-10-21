import VirtualCards from "@/app/ui/VirtualCards"
import client from "@/tina/__generated__/client";

export default async function Pages() {
  const res = await client.queries.virtual({ relativePath: "VirtualCards.json" });
  return (
    <VirtualCards data={res.data} query={res.query} variables={res.variables} />
  );
}
