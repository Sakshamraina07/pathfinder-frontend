import JobCard from "./job-card"

export default function Page() {
  return (
    (<div className="p-4">
      <JobCard
        companyName="TechCorp"
        companyLogo="/placeholder.svg?height=64&width=64"
        jobTitle="Senior Frontend Developer"
        location="San Francisco, CA"
        jobType="Full-time"
        skills={["React", "TypeScript", "Next.js", "Tailwind CSS"]}
        applyLink="https://example.com/apply" />
    </div>)
  );
}

