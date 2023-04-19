import CartProductRepository from "@/libs/product/cart.product.repository";

export default function CartDetails({
  cart,
}: {
  cart: CartProductRepository[];
}) {
  return (
    <div className="absolute mt-8 shadow-sm rounded-md w-80 right-0">
      <ul className="m-o p-0">
        {cart.map((product) => (
          <li
            key={product.name}
            className="flex justify-between items-center py-6 px-5 rounded-sm bg-black list-none text-white"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              width={50}
              height={32}
            />
            <span>{product.name}</span>
            {""}
            <span>{product.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
