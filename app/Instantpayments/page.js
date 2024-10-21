import InstantPayments from "@/app/ui/InstantPayments"
import client from "@/tina/__generated__/client";

export default async function Pages() {
  const res = await client.queries.instant({ relativePath: "stantPage.json" });
  return (
    <InstantPayments data={res.data} query={res.query} variables={res.variables} />
  );
}
