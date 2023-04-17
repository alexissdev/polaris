import CardRepository from "../../libs/card/card.repository";

export default function Card({ card }: { card: CardRepository }) {
  return (
    <div className="flex basis-full p-2 md:p-3 md:basis-1/2 xl:basis-1/3">
      <div className="flex flex-col py-2 md:py-4 px-4 md:px-8 gap-4 w-full justify-between rounded-2xl border bg-white/10 border-white/[.15]">
        <div>
          <img src={card.imageUrl} alt={card.name} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-normal text-white/80">{card.name}</p>
          <p className="font-light text-white/60">{card.description}</p>
        </div>
      </div>
    </div>
  );
}
