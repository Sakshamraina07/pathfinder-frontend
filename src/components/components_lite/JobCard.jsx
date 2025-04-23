import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// Define a list of Tailwind text colors
const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500", "text-pink-500"];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const JobCard = ({
    companyLogo,
    companyName,
    jobTitle,
    jobGeo,
    jobType,
    applyLink,
}) => {
    // Select a random color when component renders
    const randomColor = getRandomColor();

    return (
      <Card className="w-[400px] max-w-md mx-auto">
        <CardHeader className="flex flex-row items-center space-x-4 pb-4">
          <div className={`w-[30px] h-[30px] flex items-center justify-center font-black text-[45px] ${randomColor}`}>
            {companyName[0]}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{companyName}</h2>
            <p className="text-sm text-muted-foreground">{jobTitle}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{jobGeo}</span>
            <span>{jobType[0]}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <a href={applyLink} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </CardFooter>
      </Card>
    );
};

export default JobCard;
