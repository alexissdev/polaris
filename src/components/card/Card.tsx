import CardRepository from "../../libs/card/card.repository";

export default function Card({ card }: { card: CardRepository }) {
  return (
    <div className="w-full max-w-sm rounded-lg shadow bg-primary border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={card.imageUrl}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {card.name}
          </h5>
        </a>
        <p className="mt-2 text-gray-400">{card.description}</p>
        <br />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-white">${card.price}</span>
          <a
            href="#"
            className="text-white bg-blue-600 hover:bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}
