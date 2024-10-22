import FednowPayments from "@/app/ui/FedNowPayments"
import client from "@/tina/__generated__/client";

export default async function Pages() {
  const res = await client.queries.fednow({ relativePath: "FednowPage.json" });
  return (
    <FednowPayments data={res.data} query={res.query} variables={res.variables} />
  );
}
