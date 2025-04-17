import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PhysicalTherapyCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/#portfolio">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">Online Physical Therapy</h1>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Developed a 42-day therapy program for back and neck pain, incorporating personalized coaching, a
              progressive exercise regimen, and continuous outcomes monitoring.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              To improve patient access to non-operative treatment earlier and to aid in pain prevention, while
              shortening sales cycles to medical groups/hospitals/insurers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>So What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The program significantly reduced unnecessary surgeries by 90% and opioid dependence by 85%, with
              SpineZone forming strategic risk-sharing partnerships with Anthem, St. Joseph Hospital, and Scripps
              Memorial Hospital.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <h2>Project Overview</h2>
        <p>
          I led the development of an online physical therapy platform with six on-site clinics serving over 13,000 back
          and neck pain patients nationwide. This program provided measured therapy that eliminated the need for surgery
          and narcotics in many cases.
        </p>

        <h2>Challenges</h2>
        <ul>
          <li>Limited patient access to early non-operative treatment</li>
          <li>High rates of unnecessary surgeries and opioid prescriptions</li>
          <li>Long sales cycles to medical groups, hospitals, and insurers</li>
          <li>Need for continuous outcomes monitoring to demonstrate effectiveness</li>
        </ul>

        <h2>Solution</h2>
        <p>We developed a comprehensive 42-day therapy program with several key components:</p>
        <ol>
          <li>
            <strong>Personalized Coaching:</strong> Tailored guidance from physical therapists
          </li>
          <li>
            <strong>Progressive Exercise Regimen:</strong> Structured exercise plans that evolved with patient progress
          </li>
          <li>
            <strong>Continuous Outcomes Monitoring:</strong> Regular assessment of patient improvement
          </li>
          <li>
            <strong>Online Platform:</strong> Digital delivery of therapy to increase accessibility
          </li>
          <li>
            <strong>On-site Clinics:</strong> Six physical locations for patients requiring in-person care
          </li>
        </ol>

        <h2>Results</h2>
        <p>The program achieved remarkable outcomes:</p>
        <ul>
          <li>90% reduction in unnecessary surgeries</li>
          <li>85% decrease in opioid dependence</li>
          <li>
            Formation of strategic risk-sharing partnerships with major healthcare providers:
            <ul>
              <li>Anthem</li>
              <li>St. Joseph Hospital</li>
              <li>Scripps Memorial Hospital</li>
            </ul>
          </li>
        </ul>

        <h2>Key Learnings</h2>
        <p>
          This project demonstrated the power of early intervention and non-operative approaches to treating back and
          neck pain. By providing accessible, measured therapy and continuously monitoring outcomes, we were able to
          significantly reduce the need for invasive procedures and addictive medications.
        </p>
      </div>
    </div>
  )
}
