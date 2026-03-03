"use client";

import dynamic from "next/dynamic";

const GrowEduCatalog = dynamic(() => import("./GrowEduCatalog"), { ssr: false });

export default function Home() {
  return <GrowEduCatalog />;
}