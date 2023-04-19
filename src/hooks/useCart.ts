import { useState } from "react";

import CartProductRepository from "@/libs/product/cart.product.repository";

export default function useCart({
  initialCart = [],
  initialViewCart = false,
}: { initialCart?: CartProductRepository[]; initialViewCart?: boolean } = {}) {
  const [cart, setCart] = useState<CartProductRepository[]>(initialCart);
  const [viewCart, setViewCart] = useState<boolean>(initialViewCart);

  const addToCart = (product: CartProductRepository) => {
    if (cart.find((item) => item.name == product.name)) {
      const newCart: CartProductRepository[] = cart.map((item) =>
        item.name == product.name ? { ...item, amount: item.amount + 1 } : item
      );

      return setCart(newCart);
    }
    setCart([...cart, { ...product, amount: 1 }]);
  };

  const toggleCart = () => {
    if (!cart.length) {
      return;
    }
    setViewCart(!viewCart);
  };

  return { cart, addToCart, viewCart, toggleCart };
}
