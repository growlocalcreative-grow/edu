"use client";
import dynamic from "next/dynamic";
const CoachDashboard = dynamic(() => import("../CoachDashboard"), { ssr: false });
export default function Page() { return <CoachDashboard />; }