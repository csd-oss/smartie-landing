import type { Metadata } from "next";
import DriverSkLanding from "./landing";

export const metadata: Metadata = {
  title: "Driver SK — Slovak Driving Theory Test Prep",
  description:
    "Pass the Slovak driving theory test with Driver SK: 985 official questions, adaptive Smart Study, realistic mock exams, and a readiness score — fully offline, in Slovak, English, or Hungarian.",
  alternates: { canonical: "/driver-sk" },
  openGraph: {
    type: "website",
    url: "https://smartie.team/driver-sk",
    title: "Driver SK — Slovak Driving Theory Test Prep",
    description:
      "985 official questions, adaptive Smart Study, realistic mock exams, and a readiness score that climbs every day. Fully offline, in three languages.",
  },
};

export default function DriverSkPage() {
  return <DriverSkLanding />;
}
