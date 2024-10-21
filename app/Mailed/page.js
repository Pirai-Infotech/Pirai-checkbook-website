import Mailed from "@/app/ui/Mailed"
import client from "@/tina/__generated__/client";

export default async function Pages() {
  const res = await client.queries.mailed({ relativePath: "MailedPage.json" });
  return (
    <Mailed data={res.data} query={res.query} variables={res.variables} />
  );
}
