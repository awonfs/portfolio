import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TabCardProps = {
  title: string;
  titleColor: string;
  listWords: string[];
};

function TabCard({ title, titleColor, listWords }: TabCardProps) {
  return (
    <Card className="md:min-w-[450px] text-center md:text-start">
      <CardHeader>
        <CardTitle className={titleColor}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul
          className={
            title === "Skills" ? "grid grid-cols-3 md:grid-cols-2" : ""
          }
        >
          {listWords.map((word) => {
            return (
              <li
                key={word}
                className="leading-7 text-center text-xs md:text-base md:text-start"
              >
                {word}
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}

export default TabCard;
