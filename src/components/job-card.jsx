import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function JobCard({
  companyName,
  companyLogo,
  jobTitle,
  location,
  jobType,
  skills,
  applyLink
}) {
  return (
    (<Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
        <Image
          src={companyLogo || "/placeholder.svg"}
          alt={`${companyName} logo`}
          width={64}
          height={64}
          className="rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{companyName}</h2>
          <p className="text-sm text-muted-foreground">{jobTitle}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{location}</span>
          <span>{jobType}</span>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Required Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href={applyLink} target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </Button>
      </CardFooter>
    </Card>)
  );
}

