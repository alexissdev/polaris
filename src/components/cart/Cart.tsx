import CartProductRepository from "@/libs/product/cart.product.repository";
import BubbleAlert from "@/components/alert/BubbleAlert";
import CartDetails from "@/components/cart/CartDetails";

export default function Cart({
  cart,
  viewCart,
  toggleCart,
}: {
  cart: CartProductRepository[];
  viewCart: boolean;
  toggleCart: () => void;
}) {
  const amount: number = cart.reduce(
    (acc: number, product: CartProductRepository) => acc + product.amount,
    0
  );

  return (
    <div>
      <span className="relative left-3 top-5">
        {amount > 0 && <BubbleAlert value={amount} />}
      </span>

      <button
        onClick={toggleCart}
        className="border-none cursor-pointer appearance-none"
      >
        {
          <img
            src="/cart.png"
            alt="cart"
            className="border-0 w-16 h-16 align-middle"
          />
        }
      </button>
      {viewCart && <CartDetails cart={cart} />}
    </div>
  );
}
