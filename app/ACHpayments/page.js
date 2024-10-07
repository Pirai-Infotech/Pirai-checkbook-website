import client from "@/tina/__generated__/client";
import AchPayments from "@/app/ui/AchPayments"

export default async function Pages() {
  const res = await client.queries.blog({ relativePath: "BlogPages.json" });
  return (
    <AchPayments data={res.data} query={res.query} variables={res.variables} />
  );
}
