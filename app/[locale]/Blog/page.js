import React from 'react';
import { useTranslations } from "next-intl";
import BlogPage from "@/app/ui/BlogPage"

export default function Home({params}) {
  const t = useTranslations("Index");
  const { locale } = params;

  return (
    <div>
      <BlogPage t={t}/>
      </div>
  );
}
