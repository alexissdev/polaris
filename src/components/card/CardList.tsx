import CardRepository from "@/libs/card/card.repository";
import ProductCard from "./ProductCard";

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
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {cards.map((card) => (
          <ProductCard key={card.name} card={card} />
        ))}
      </div>
    </div>
  );
}
