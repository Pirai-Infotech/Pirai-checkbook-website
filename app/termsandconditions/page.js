import React from "react";
import Term from "../ui/Term";
import client from "@/tina/__generated__/client";


export default async function  page() {
  const res = await client.queries.terms({ relativePath: "TermsPages.json" });

  return (
    <Term data={res.data} query={res.query} variables={res.variables} />
  );
}

