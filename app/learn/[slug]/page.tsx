"use client";
import dynamic from "next/dynamic";
const LessonViewer = dynamic(() => import("../../LessonViewerWithAI"), { ssr: false });
export default function Page() { return <LessonViewer />; }