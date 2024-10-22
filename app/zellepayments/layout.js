import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import client from "@/tina/__generated__/client";

const Layout = async ({ children }) => {
  const res = await client.queries.zelle({ relativePath: "zellePayments.json" });

  return (
    <div className="cb-bg bg-ach">
      <Header data={res.data} query={res.query} variables={res.variables} pageType="zelle" />
      {children}
      <Footer data={res.data} query={res.query} variables={res.variables} contactFormText= "Enroll in Zelle Payments" />
    </div>
  );
};

export default Layout;

