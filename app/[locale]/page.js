
import React from 'react';
import { useTranslations } from "next-intl";
import HomePage from "@/app/ui/HomePage"

export default function Home({params}) {
  const t = useTranslations("Index");
  const { locale } = params;

  return (
    <div>
        {/* <p>{t("title")}</p> */}
        <HomePage />
      </div>
  );
}
