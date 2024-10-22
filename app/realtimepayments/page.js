import RealtimePayments from "@/app/ui/RealtimePayments"
import client from "@/tina/__generated__/client";

export default async function Pages() {
  const res = await client.queries.realtime({ relativePath: "RealtimePage.json" });
  return (
    <RealtimePayments data={res.data} query={res.query} variables={res.variables} />
  );
}