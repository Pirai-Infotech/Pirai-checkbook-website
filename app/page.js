import client from "@/tina/__generated__/client";
import HomePage from "./Home/page";

export default async function Home() {
  const res = await client.queries.page({ relativePath: "homePage.json" });
  return (
    <HomePage data={res.data} query={res.query} variables={res.variables} />
  );
}
