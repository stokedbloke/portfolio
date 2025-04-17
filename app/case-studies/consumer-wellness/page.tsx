import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConsumerWellnessCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/#portfolio">
          <span className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </span>
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">Consumer Wellness</h1>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The analytics infrastructure, company culture of rapid segment testing, and rebranding of company image &
              website.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              WellnessFX needed to expand beyond the early adopter customer base of CrossFIT athletes and learn who else
              wanted autonomy in monitoring their health.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>So What?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              These efforts led to the identification of new customer segments, successful product launches, and
              ultimately, the acquisition of the company by Thorne, marking a significant milestone in its growth
              trajectory.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <h2>Project Overview</h2>
        <p>
          I led market segmentation and product creation initiatives that enabled the successful sale of WellnessFX's
          biometrics business. This work involved developing analytics infrastructure, fostering a culture of rapid
          segment testing, and rebranding the company's image and website.
        </p>

        <h2>Challenges</h2>
        <ul>
          <li>Limited customer base primarily consisting of CrossFIT athletes</li>
          <li>Need to identify new market segments for expansion</li>
          <li>Lack of robust analytics infrastructure for customer insights</li>
          <li>Brand positioning that didn't resonate with broader wellness audiences</li>
        </ul>

        <h2>Solution</h2>
        <p>My approach included three key components:</p>
        <ol>
          <li>
            <strong>Analytics Infrastructure:</strong>
            <ul>
              <li>Built comprehensive data collection and analysis systems</li>
              <li>Implemented tools for tracking customer behavior and preferences</li>
              <li>Developed dashboards for monitoring key performance indicators</li>
            </ul>
          </li>
          <li>
            <strong>Rapid Segment Testing:</strong>
            <ul>
              <li>Established a company culture focused on continuous experimentation</li>
              <li>Implemented methodologies for quickly testing market segment hypotheses</li>
              <li>Created feedback loops for iterative product development</li>
            </ul>
          </li>
          <li>
            <strong>Company Rebranding:</strong>
            <ul>
              <li>Refreshed the company image to appeal to broader wellness audiences</li>
              <li>Redesigned the website to improve user experience and conversion</li>
              <li>Developed messaging that resonated with newly identified customer segments</li>
            </ul>
          </li>
        </ol>

        <h2>Results</h2>
        <p>These initiatives delivered significant outcomes:</p>
        <ul>
          <li>Identification of new customer segments beyond the initial CrossFIT athlete base</li>
          <li>Successful launch of products tailored to these new segments</li>
          <li>Increased market share in the consumer wellness space</li>
          <li>Enhanced company valuation leading to acquisition by Thorne</li>
        </ul>

        <h2>Key Learnings</h2>
        <p>
          This project highlighted the importance of data-driven decision making in product development and market
          expansion. By building robust analytics infrastructure and fostering a culture of experimentation, we were
          able to identify untapped market opportunities and develop products that resonated with new customer segments,
          ultimately leading to a successful acquisition.
        </p>
      </div>
    </div>
  )
}
