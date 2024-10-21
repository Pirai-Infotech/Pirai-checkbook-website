import ZellePayments from "@/app/ui/ZellePayments"
import client from "@/tina/__generated__/client";

export default async function Pages() {
  const res = await client.queries.zelle({ relativePath: "zellePayments.json" });
  return (
    <ZellePayments data={res.data} query={res.query} variables={res.variables} />
  );
}
