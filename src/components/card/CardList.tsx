import CardRepository from "../../libs/card/card.repository";
import Card from "./Card";

export default function CardList({
  cards,
  title,
}: {
  cards: CardRepository[];
  title?: string;
}) {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="p-8 text-white/80 font-medium text-3xl sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <div className="flex flex-col gap-8 px-8">
        <div className="flex flex-wrap -mx-1">
          {cards.map((card) => (
            <Card key={card.name} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}