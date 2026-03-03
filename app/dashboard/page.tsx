"use client";

import dynamic from "next/dynamic";

const StudentDashboard = dynamic(() => import("../StudentDashboard"), { ssr: false });

export default function Page() {
  return <StudentDashboard />;
}