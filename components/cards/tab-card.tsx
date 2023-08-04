import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TabCardProps = {
  title: string;
  titleColor: string;
  listWords: string[];
};

function TabCard({ title, titleColor, listWords }: TabCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={titleColor}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {listWords.map((word) => {
            return (
              <li key={word} className="leading-7 [&:not(:first-child)]:mt-1">
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
