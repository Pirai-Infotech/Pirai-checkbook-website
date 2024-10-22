import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import client from "@/tina/__generated__/client";

const Layout = async ({ children }) => {
  const res = await client.queries.realtime({ relativePath: "RealtimePage.json" });

  return (
    <div className="cb-bg bg-ach">
      <Header data={res.data} query={res.query} variables={res.variables} pageType="realtime" />
      {children}
      <Footer data={res.data} query={res.query} variables={res.variables} contactFormText="Enroll in Realtime Payments" />
    </div>
  );
};

export default Layout;
