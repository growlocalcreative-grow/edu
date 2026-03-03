"use client";

import dynamic from "next/dynamic";

const CourseDetail = dynamic(() => import("../../CourseDetail"), { ssr: false });

export default function Page() {
  return <CourseDetail />;
}
