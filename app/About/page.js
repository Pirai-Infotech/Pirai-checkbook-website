import AboutUs from "@/app/ui/AboutUs"
import client from "@/tina/__generated__/client";

export default async function Pages() {
  const res = await client.queries.about({ relativePath: "AboutPage.json" });
  return (
    <AboutUs data={res.data} query={res.query} variables={res.variables} />
  );
}
