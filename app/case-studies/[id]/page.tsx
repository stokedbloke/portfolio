import CaseStudyClientPage from "./CaseStudyClientPage"

// Add this export for static site generation
export function generateStaticParams() {
  return [
    { id: "behavioral-health" },
    { id: "preventative-care" },
    { id: "physical-therapy" },
    { id: "electronic-health-record" },
    { id: "patient-relationship" },
    { id: "consumer-wellness" },
  ]
}

export default function CaseStudyPage() {
  return <CaseStudyClientPage />
}
