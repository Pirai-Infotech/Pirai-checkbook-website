import Printable from "@/app/ui/Printable"
import client from "@/tina/__generated__/client";

export default async function Pages() {
  const res = await client.queries.printable({ relativePath: "PrintableChecks.json" });
  return (
    <Printable data={res.data} query={res.query} variables={res.variables} />
  );
}
