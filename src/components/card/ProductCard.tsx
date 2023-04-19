import ProductRepository from "@/libs/product/product.repository";
import CartProductRepository from "@/libs/product/cart.product.repository";

export default function ProductCard({
  product,
  addToCart,
}: {
  product: ProductRepository;
  addToCart: (product: CartProductRepository) => void;
}) {
  return (
    <div className="w-full max-w-sm rounded-lg shadow bg-primary border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={product.imageUrl}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {product.name}
          </h5>
        </a>
        <p className="mt-2 text-gray-400">{product.shortDescription}</p>
        <br />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-white">
            ${product.price}
          </span>
          <a
            href="#"
            className="text-white bg-secondary hover:bg-[#4B2160] focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => addToCart({ ...product, amount: 1 })}
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}
