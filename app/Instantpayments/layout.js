import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import client from "@/tina/__generated__/client";

const Layout = async ({ children }) => {
  const res = await client.queries.instant({ relativePath: "stantPage.json" });

  return (
    <div className="cb-bg bg-ach">
      <Header data={res.data} query={res.query} variables={res.variables} pageType="instant" />
      {children}
      <Footer data={res.data} query={res.query} variables={res.variables} contactFormText= "Enroll in FedNow Payments" />
    </div>
  );
};

export default Layout;

