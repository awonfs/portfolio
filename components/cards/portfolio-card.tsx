import { Button } from "../ui/button";
import Link from "next/link";

type PortfolioCardProps = {
  title: string;
  link: string;
  description1: string;
  description2: string;
  technologies: { color: string; name: string }[];
  span?: number;
  textSize?: string;
  buttonWidth?: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  link,
  description1,
  description2,
  technologies,
  span = 1,
  textSize = "text-xs md:text-sm",
  buttonWidth = "w-3/4",
}) => (
  <div
    className={`border h-40 flex gap-4 rounded px-4 md:px-0 col-span-${span}`}
  >
    <div className="flex items-center justify-evenly flex-col flex-1">
      <h2 className={`text-center font-semibold ${textSize}`}>{title}</h2>
      <Button
        className={`${buttonWidth} bg-red-500 text-white hover:opacity-90 transition-all`}
      >
        <Link target="_blank" href={link}>
          Check out the code
        </Link>
      </Button>
    </div>
    <div
      className={`flex flex-col flex-1 gap-2 justify-center ${textSize} p-4`}
    >
      <span>{description1}</span>
      <span>
        {description2}{" "}
        {technologies.map((tech, idx) => (
          <span key={idx} className={tech.color}>
            {tech.name}
          </span>
        ))}
      </span>
    </div>
  </div>
);

export default PortfolioCard;
