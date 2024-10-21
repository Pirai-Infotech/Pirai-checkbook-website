import React from "react";
import Privacy  from "../ui/Privacy";
import client from "@/tina/__generated__/client";


export default async function page() {
  const res = await client.queries.policy({ relativePath: "PrivacyPages.json" });

  return (
    <Privacy data={res.data} query={res.query} variables={res.variables} />
  );
}

