import ProductRepository from "@/libs/product/product.repository";
import CartProductRepository from "@/libs/product/cart.product.repository";
import ProductCard from "./ProductCard";

export default function CardList({
  products,
  title,
  addToCart,
}: {
  products: ProductRepository[];
  title?: string;
  addToCart: (product: CartProductRepository) => void;
}) {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="p-8 text-white/80 font-medium text-3xl sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {products.map((product) => (
          <ProductCard
            addToCart={addToCart}
            key={product.name}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
